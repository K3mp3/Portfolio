import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.z = 15;
scene.add(camera);

// Globe particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCnt = 20000;

const posArray = new Float32Array(particlesCnt * 3);
const originalPosArray = new Float32Array(particlesCnt * 3);
const colorArray = new Float32Array(particlesCnt * 3);

for (let i = 0; i < particlesCnt; i++) {
  const i3 = i * 3;
  const radius = 5 + Math.random() * 5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);

  posArray[i3] = originalPosArray[i3] =
    radius * Math.sin(phi) * Math.cos(theta);
  posArray[i3 + 1] = originalPosArray[i3 + 1] =
    radius * Math.sin(phi) * Math.sin(theta);
  posArray[i3 + 2] = originalPosArray[i3 + 2] = radius * Math.cos(phi);

  colorArray[i3] = 0; // R
  colorArray[i3 + 1] = 0.5; // G
  colorArray[i3 + 2] = 1; // B
}

particlesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);
particlesGeometry.setAttribute(
  "color",
  new THREE.BufferAttribute(colorArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  vertexColors: true,
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Render
const canvas = document.querySelector(".webgl");
let renderer = null;
if (canvas) {
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(new THREE.Color("#000"), 1);
}

// Mouse
const mouse = new THREE.Vector2();
document.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

// Controls
let controls = null;
if (renderer) {
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
}

// Animation
const raycaster = new THREE.Raycaster();
const tempVector = new THREE.Vector3();

const animate = () => {
  if (controls) controls.update();

  raycaster.setFromCamera(mouse, camera);

  const positions = particlesGeometry.attributes.position.array;
  const time = Date.now() * 0.00005;

  for (let i = 0; i < positions.length; i += 3) {
    tempVector.set(positions[i], positions[i + 1], positions[i + 2]);
    tempVector.project(camera);

    const distanceToMouse = Math.sqrt(
      Math.pow(tempVector.x - mouse.x, 2) + Math.pow(tempVector.y - mouse.y, 2)
    );

    if (distanceToMouse < 0.1) {
      const repulsionForce = (0.1 - distanceToMouse) * 0.5;
      positions[i] += (positions[i] / 5) * repulsionForce;
      positions[i + 1] += (positions[i + 1] / 5) * repulsionForce;
      positions[i + 2] += (positions[i + 2] / 5) * repulsionForce;
    } else {
      // Gradually return to original position
      positions[i] += (originalPosArray[i] - positions[i]) * 0.05;
      positions[i + 1] += (originalPosArray[i + 1] - positions[i + 1]) * 0.05;
      positions[i + 2] += (originalPosArray[i + 2] - positions[i + 2]) * 0.05;
    }

    // Add subtle floating effect
    positions[i] += Math.sin(time + i) * 0.005;
    positions[i + 1] += Math.cos(time + i * 1.1) * 0.005;
    positions[i + 2] += Math.sin(time + i * 1.2) * 0.005;
  }

  particlesGeometry.attributes.position.needsUpdate = true;

  if (renderer) renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
};

animate();

// Resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  if (renderer) {
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
});

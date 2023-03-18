/* Global variables */
const myProjectsContainer = document.querySelector(".my-projects-container");
const myProjectsHoverDiv = document.querySelector(".my-projects-hover-div");

import Pizzaleria from "../assets/pizzaleria.jpg";
import nothingPhone from "../assets/nothingPhone.png";
import toTheMoon from "../assets/toTheMoon.jpg";
import donutShop from "../assets/donutShop.webp";

import gsap from "gsap"; 

function init() {
    myProjectsContainer.addEventListener("mouseover", showHoverEffectOnMyProjectsContainer);
}

init();

function showHoverEffectOnMyProjectsContainer(e) {
    
}

const projects = [
    {
        images: [
            {
                img: Pizzaleria,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://medieinstitutet.github.io/fed22d-grafiska-verktyg-korsbarstomaterna/",
        heading: "Pizzaleria",
    },
    {
        images: [
            {
                img: nothingPhone,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://medieinstitutet.github.io/fed22d-grafiska-verktyg-gazpachon/",
        heading: "Pizzaleria",
    },
    {
        images: [
            {
                img: toTheMoon,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://k3mp3.github.io/Major-Tom/",
        heading: "Pizzaleria",
    },
    {
        images: [
            {
                img: donutShop,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://medieinstitutet.github.io/fed22d-js-grundkurs-gruppuppgift-webbshop-team-kontorstid/",
        heading: "Pizzaleria",
    }
];

for (let i = 0; i < projects.length; i++) {
    myProjectsContainer.innerHTML += `
    <div class="project-container">
        <a target="_blank" href="${projects[i].link}"><img src="${projects[i].images[0].img}"></a>
        <!--<div class="my-projects-hover-div">  
        </div>-->
    </div>
`;
}
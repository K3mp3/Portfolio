import gsap from "gsap"; 

/* eslint-disable no-undef */
let width = window.innerWidth; 


/* varabiler */

const headerH1 = document.querySelector(".h1-header-desktop");
let menuIsOpen = false;
let menuOverlay = false;
 
function init() {
    menuOverlay = document.querySelector(".menu-overlay");
    gsap.to(menuOverlay, {x: 20000});

    /* Calling functions */
    changeText();
    moveMenuOverlay();

    //gsap.from(menuOverlay, { x: 170, delay: 1 });
}

init();
 
function changeText() {
    if (width > 920) {
        headerH1.classList.remove("remove-text");
    } else {
        return;
    }
}

function moveMenuOverlay() {

}


function createEventListeners() {
    document.querySelector(".menuToggleBtn").addEventListener("click", () => {
        if (!menuIsOpen) { // Mobile menu button handler
            openMenu();
            gsap.to(menuOverlay, {x: 0});
        } else {
            closeMenu();
            //gsap.to(menuOverlay, {x: 20000});
        }
    });
    for (let i = 0; i < menuOptions.length; i++) // Closes menu after a link press
        menuOptions[i].addEventListener("click", () => {
            closeMenu();
        });
}


function closeMenu() {
    gsap.to(menuOverlay, {opacity:1, x: 50000, display:"grid"}, {opacity:0, x: 500, duration: 0.5, display:"none"});
    gsap.to(".second-row>span:nth-child(1)", {x:0, y:0, duration: 0.15});
    gsap.to(".third-row>span:nth-child(2)", {x:0, y:0, duration: 0.15, delay: 0.1});
    gsap.to(".second-row>span:nth-child(3)", {x:0, y:0, duration: 0.15, delay: 0.2});
    gsap.to(".first-row>span:nth-child(2)", {x:0, y:0, duration: 0.15, delay: 0.3});
    menuIsOpen = false;
}
function openMenu() {
    gsap.from(menuOverlay, {display:"none", opacity:0, x: 50000},{display:"grid",opacity:1, x: 0, duration: 0.3});
    gsap.to(".first-row>span:nth-child(2)", {x:8.6, y:8.6, duration: 0.15});
    gsap.to(".second-row>span:nth-child(3)", {x:-8.6, y:8.6, duration: 0.15, delay: 0.1});
    gsap.to(".third-row>span:nth-child(2)", {x:-8.6, y:-8.6, duration: 0.15, delay: 0.2});
    gsap.to(".second-row>span:nth-child(1)", {x:8.6, y:-8.6, duration: 0.15, delay: 0.3});
    menuIsOpen = true;
}


createEventListeners();


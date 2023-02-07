import gsap from "gsap"; 

/* eslint-disable no-undef */
/* varabiler */

const headerH1 = document.querySelector(".h1-header-desktop");

let menuIsOpen = false;
let menuOverlay = false;
let width = document.documentElement.clientWidth;
let newWidth = width * 2;
 
function init() {
    menuOverlay = document.querySelector(".menu-overlay");
    gsap.to(menuOverlay, { opacity: 0});
    

    /* Calling functions */
    changeText();
}

init();

function changeText() {
    if (width > 920) {
        headerH1.classList.remove("remove-text");
    } else {
        return;
    }
}

function createEventListeners() {
    document.querySelector(".menuToggleBtn").addEventListener("click", () => {
        if (!menuIsOpen) { // Mobile menu button handler
            menuOverlay.classList.remove("hide-menu-overlay");
            openMenu();
            gsap.to(menuOverlay, {duration: 1, opacity: 1});
        } else {
            menuOverlay.classList.remove("hide-menu-overlay");
            closeMenu();
            gsap.to(menuOverlay, {duration: 1, opacity: 0});
        }
    });
    for (let i = 0; i < menuOptions.length; i++) // Closes menu after a link press
        menuOptions[i].addEventListener("click", () => {
            closeMenu();
        });
}


function closeMenu() {
    gsap.to(".second-row>span:nth-child(1)", {x:0, y:0, duration: 0.15});
    gsap.to(".third-row>span:nth-child(2)", {x:0, y:0, duration: 0.15, delay: 0.1});
    gsap.to(".second-row>span:nth-child(3)", {x:0, y:0, duration: 0.15, delay: 0.2});
    gsap.to(".first-row>span:nth-child(2)", {x:0, y:0, duration: 0.15, delay: 0.3});
    menuIsOpen = false;
}
function openMenu() {
    gsap.to(".first-row>span:nth-child(2)", {x:8.6, y:8.6, duration: 0.15});
    gsap.to(".second-row>span:nth-child(3)", {x:-8.6, y:8.6, duration: 0.15, delay: 0.1});
    gsap.to(".third-row>span:nth-child(2)", {x:-8.6, y:-8.6, duration: 0.15, delay: 0.2});
    gsap.to(".second-row>span:nth-child(1)", {x:8.6, y:-8.6, duration: 0.15, delay: 0.3});
    menuIsOpen = true;
}

createEventListeners();
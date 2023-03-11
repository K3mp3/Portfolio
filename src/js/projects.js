/* Global variables */
const myProjectsContainer = document.querySelector(".my-projects-container");

import Pizzaleria from "../assets/pizzaleria.jpg";
import nothingPhone from "../assets/nothingPhone.jpg";
import toTheMoon from "../assets/toTheMoon.jpg";

const projects = [
    {
        images: [
            {
                img: Pizzaleria,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://medieinstitutet.github.io/fed22d-grafiska-verktyg-gazpachon/",
    },
    {
        images: [
            {
                img: nothingPhone,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://medieinstitutet.github.io/fed22d-grafiska-verktyg-korsbarstomaterna/",
    },
    {
        images: [
            {
                img: toTheMoon,
                alt: "The project which the link goes to",
            }
        ],
        link: "https://k3mp3.github.io/Major-Tom/",
    }
];

for (let i = 0; i < projects.length; i++) {
    myProjectsContainer.innerHTML += `
    <div class="project-container">
    <a target="_blank" href="${projects[i].link}"><img src="${projects[i].images[0].img}"></a>
    </div>
`;
}
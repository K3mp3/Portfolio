import"./main-1eaa8d0c.js";const e=document.querySelector(".my-projects-container"),i=[{images:[{img:"/public/img/nothingPhone.png",alt:"The project which the link goes to"}],link:"https://medieinstitutet.github.io/fed22d-grafiska-verktyg-gazpachon/"},{images:[{img:"/public/img/pizzaleria.jpg",alt:"The project which the link goes to"}],link:"https://medieinstitutet.github.io/fed22d-grafiska-verktyg-korsbarstomaterna/"},{images:[{img:"/public/img/toTheMoon.jpg",alt:"The project which the link goes to"}],link:"https://k3mp3.github.io/Major-Tom/"}];for(let t=0;t<i.length;t++)e.innerHTML+=`
    <div class="project-container">
    <a target="_blank" href="${i[t].link}"><img src="${i[t].images[0].img}"></a>
    </div>
`;
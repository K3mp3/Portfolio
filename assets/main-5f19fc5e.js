import"./main-1eaa8d0c.js";const i="/assets/pizzaleria-5026032b.jpg",o="/assets/nothingPhone-d05fc2dd.png",n="/assets/toTheMoon-c4c3da16.jpg",s=document.querySelector(".my-projects-container"),e=[{images:[{img:i,alt:"The project which the link goes to"}],link:"https://medieinstitutet.github.io/fed22d-grafiska-verktyg-korsbarstomaterna/"},{images:[{img:o,alt:"The project which the link goes to"}],link:"https://medieinstitutet.github.io/fed22d-grafiska-verktyg-gazpachon/"},{images:[{img:n,alt:"The project which the link goes to"}],link:"https://k3mp3.github.io/Major-Tom/"}];for(let t=0;t<e.length;t++)s.innerHTML+=`
    <div class="project-container">
    <a target="_blank" href="${e[t].link}"><img src="${e[t].images[0].img}"></a>
    </div>
`;

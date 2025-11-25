
const btnMenu = document.getElementById("btn-menu");

const navMenu = document.querySelector("header nav");  

const btnClose = document.getElementById("btn-close");

console.log(btnMenu);

btnMenu.addEventListener("click", ()=>{

    navMenu.classList.add("nav-visible");
});

btnClose.addEventListener("click", ()=>{

    navMenu.classList.remove("nav-visible");
});


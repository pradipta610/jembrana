window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY >0);
})//untuk navbar supaya stick on the top

 
const menu= document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menu.addEventListener("click",function(){
    nav.classList.toggle("slide");
})//buat burger span



let headerMenu=document.querySelector(".menu"),menuButton=document.querySelector(".menu__button"),header=document.querySelector(".header");headerMenu.classList.remove("menu--nojs"),header.classList.remove("header--nojs"),menuButton.addEventListener("click",(function(){headerMenu.classList.toggle("menu--active")}));
const menu = document.querySelector('.menu__cont');
const header = document.querySelector('.header__nav');

menu.addEventListener("click", () =>{
    header.classList.toggle("header__nav--modifier");
});


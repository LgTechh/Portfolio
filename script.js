const nav = document.querySelector('.navbar_header');
const menuBurger = document.querySelector('.navMenuBurg')
const divBurger = document.querySelector('.imgBurgers')


menuBurger.addEventListener('click', () => {
    divBurger.classList.toggle('menuDeroulant');
    nav.classList.toggle('navbarHeader');
    menuBurger.classList.toggle('affichageMenu');
});


const nav = document.querySelector('.navbar_header');
const menuBurger = document.querySelector('.navMenuBurg')
const divBurger = document.querySelector('.imgBurgers')


menuBurger.addEventListener('click', () => {
    divBurger.classList.toggle('menuDeroulant');
    nav.classList.toggle('navbarHeader');
    menuBurger.classList.toggle('affichageMenu');
});

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mail = document.getElementById('email').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const description = document.getElementById('description').value.trim();

    const nameRegex = /^[a-zA-ZÀ-ÿ\- ]{2,}$/;
    const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;


    if (!nameRegex.test(name)) {
        alert("Le champ 'Nom' est invalide (minimum 2 lettres).");
        return;
    }
    if (!mailRegex.test(mail)) {
        alert("Le champ 'Mail' est invalide");
        return;
    }
    if (tel && !telRegex.test(tel)) {
        alert("Le format du numéro de téléphone est invalide");
        return;
    }
    if (description.length < 10) {
        alert("La description doit contenir au moins 10 caractères");
        return;
    }
    alert("Formulaire envoyé avec succès !");
    this.reset();
});
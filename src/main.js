import "./styles/main.scss";

import Typed from 'typed.js';

document.addEventListener("DOMContentLoaded", event => {

    changeHTML("presentacion")

    const butonCambiarAbout = document.querySelectorAll(".cambiarAbout");
    butonCambiarAbout.forEach(button => button.addEventListener("click", e => changeHTML("about")));

    const butonCambiarProjects = document.querySelectorAll(".cambiarProjects");
    butonCambiarProjects.forEach(button => button.addEventListener("click", e => changeHTML("projects")));

    const butonCambiarContact = document.querySelectorAll(".cambiarContact");
    butonCambiarContact.forEach(button => button.addEventListener("click", e => changeHTML("contact")));

    const butonCambiarPresentacion = document.querySelectorAll(".cambiarPresentacion");
    butonCambiarPresentacion.forEach(button => button.addEventListener("click", e => changeHTML("presentacion")));

    new Typed('.huge-text.hugo', {
        strings: ['Hugo'],
        typeSpeed: 50,
        showCursor: false,
        loop: false,
        onComplete: () => {
            new Typed('.huge-text.martin', {
                strings: ['Martin'],
                typeSpeed: 50,
                showCursor: false,
                loop: false,
            });
        },
    });


    new Typed('#typed-description', {
        strings: [
            "I’m a 2nd-year Web Development student (DAW) and passionate about web development. Here, I share my projects, learnings, and progress as I explore the world of programming. Thank you for visiting!"
        ],
        typeSpeed: 30,
        startDelay: 1500,
        showCursor: false,
        loop: false,
    });

});







function changeHTML(id) {

    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(pagina => {
        if (pagina.classList.contains("d-block"))
            pagina.classList.remove("d-block")
        pagina.classList.add("d-none")
    });

    const paginaAMostrar = document.querySelector(`#${id}`);

    if (paginaAMostrar.classList.contains("d-none"))
        paginaAMostrar.classList.remove("d-none");
    paginaAMostrar.classList.add("d-block");
}
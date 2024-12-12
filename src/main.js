import "./styles/main.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener("DOMContentLoaded", event => {
    AOS.init();
    //    duration: 1000,
    //    once: true,
    //});

    changeHTML("presentacion")

    const butonCambiarAbout = document.querySelectorAll(".cambiarAbout");
    butonCambiarAbout.forEach(button => button.addEventListener("click", e => changeHTML("about")));

    const butonCambiarProjects = document.querySelectorAll(".cambiarProjects");
    butonCambiarProjects.forEach(button => button.addEventListener("click", e => changeHTML("projects")));

    const butonCambiarContact = document.querySelectorAll(".cambiarContact");
    butonCambiarContact.forEach(button => button.addEventListener("click", e => changeHTML("contact")));

    const butonCambiarPresentacion = document.querySelectorAll(".cambiarPresentacion");
    butonCambiarPresentacion.forEach(button => button.addEventListener("click", e => changeHTML("presentacion")));
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
    // setTimeout(() => {
    AOS.refresh();
    // }, 100);
}
import { AbrirModal, AbrirModalUpdate } from "../modalNotas.js";
import { borrarNota, notas } from "./notas.js"

export const renderizarNotas = () => {
    let notasContainer = document.querySelector('.notas-card-container')
    notasContainer.innerHTML = ""
    notas.forEach(nota => {
        const articleNota = document.createElement('article')
        articleNota.classList.add('nota')
        articleNota.innerHTML = `
        <h4>${nota.titulo}</h4>
        <p>${nota.texto}</p>
        `
        articleNota.style.borderLeftColor = nota.color
        notasContainer.appendChild(articleNota)


        articleNota.addEventListener('click', () => {
            AbrirModalUpdate(nota)
        })
    });
}

//!PENDIENTES!

//Agregar cada boton de manera dinamica a cada nota con su funcionalidad
//Terminar y arreglar la funcion de editar la nota
//Terminar la seccion de notas en general
//Arreglar los bugs con el array de notas
//Arreglar bug con el boton de agregar notas
//Arreglar el bug con el boton de borrar
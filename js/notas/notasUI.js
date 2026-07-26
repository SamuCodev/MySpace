import { AbrirModal, AbrirModalUpdate } from "../modalNotas.js";
import { borrarNota, notas } from "./notas.js"

//! FUNCION QUE RENDERIZA Y MUESTRA TODA LA INFORMACION DE LAS NOTAS
export const renderizarNotas = () => {
    let notasContainer = document.querySelector('.notas-card-container')

    /*
     *  Esta seccion de codigo lo que hace es que si no hay ninguna nota creada
     *  Se ajusta el contenedor de las notas y se muestra un mensaje que avisa
     *  que no hay ninguna nota creada
     */
    if (notas.length === 0) {
        notasContainer.style.display = 'flex'
        notasContainer.style.justifyContent = 'center'
        notasContainer.innerHTML = ""
        let h5Info = document.createElement('h5')
        h5Info.classList.add('nothing-msg')
        h5Info.textContent = "No hay notas disponibles, ¡Crea una nueva!"
        notasContainer.appendChild(h5Info)
    } else {

        /*
         *  Si hay notas, se limpia el contenedor y por cada tarea en el array
         *  de notas se crea un articulo con su informacion especifica para
         *  finalmente mostrarla en el contenedor de tareas
         */
        notasContainer.innerHTML = ""
        notasContainer.style.display = 'grid'
        notas.forEach(nota => {
            const articleNota = document.createElement('article')
            articleNota.classList.add('nota')
            articleNota.innerHTML = `
            <h4>${nota.titulo}</h4>
            <p>${nota.texto}</p>
            <p class="fecha">Fecha: ${nota.fechaAño}/${nota.fechaMes}/${nota.fechaDia}</p>
            `
            articleNota.style.borderLeftColor = nota.color
            notasContainer.appendChild(articleNota)

            /*
             *  Si se hace click en una nota creada, en base a toda la informacion
             *  de la nota, se abre un modal el cual podra editarse y guardarse la
             *  informacion nueva que se quiera actualizar
             */
            articleNota.addEventListener('click', () => {
                AbrirModalUpdate(nota)
            })
        });
    }
}
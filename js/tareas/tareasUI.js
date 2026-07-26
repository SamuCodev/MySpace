import { guardarItem, leerItem } from "../storage.js";
import { borrarTarea, crearTarea, tareas } from "./tareas.js";

const counterTareasInit = document.querySelector('.counter-tareas-init')
const counterTareasTotal = document.querySelector('.counter-tareas-total')

//! Asimismo como con los IDs de tareas, con el contador se restaura el numero guardado
let counterInit = leerItem('contadorUI', 0)

export const actualizarContadores = () => {
    guardarItem('contadorUI', counterInit)
}

const obtenerTareasCompletadas = () => tareas.filter(tarea => tarea.completado).length

//! Funcion que se encarga de renderizar y limpiar todo el contenedor de tareas
export const renderizarTareas = () => {
    const tareasContainer = document.querySelector('.tareas-card-container')
    tareasContainer.innerHTML = ''
    if (tareas.length === 0) {
        tareasContainer.innerHTML = ""
        const h5Info = document.createElement('h5')
        h5Info.classList.add('nothing-msg')
        h5Info.textContent = "No hay tareas disponibles, ¡Crea una nueva!"
        tareasContainer.appendChild(h5Info)
    } else {
        //* Reinicia el contenedor para que no se dupliquen tareas existentes
        //* Control del contadr de tareas completadas
        counterTareasInit.textContent = obtenerTareasCompletadas()
        counterTareasTotal.textContent = tareas.length
        actualizarContadores()

        //* Renderizado de cada tarea en el array "Tarea" con sus propias funcionalidades
        tareas.forEach(tarea => {
            const articleTarea = document.createElement('article')
            articleTarea.classList.add('tarea')
            if (tarea.completado) {
                articleTarea.classList.add('tarea-selected')
            }
            //* Se contruye cada elemento de la tarea
            const tareaHeader = document.createElement('div')
            tareaHeader.classList.add('tarea-header')
            const tareaInfo = document.createElement('div')
            tareaInfo.classList.add('tarea-info')
            const tareaBadge = document.createElement('span')
            tareaBadge.classList.add('tareas-date-badge')
            tareaBadge.textContent = 'Hoy'
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.id = `checkbox-${tarea.id}`
            const tareaFooter = document.createElement('div')
            tareaFooter.classList.add('tarea-footer')
            const delTarea = document.createElement('button')
            delTarea.classList.add('del-tarea')
            delTarea.textContent = 'Eliminar tarea'

            //* Se le agrega funcionalidad al boton de borrar la tarea del array y del contenedor
            delTarea.addEventListener('click', () => {
                borrarTarea(tarea.id)
                renderizarTareas()
            })

            //* Se juntan todos los elementos creados en la tarea para conformarla
            tareaInfo.appendChild(checkbox)

            const titleTarea = document.createElement('p')
            titleTarea.textContent = tarea.title

            tareaHeader.appendChild(tareaInfo)
            tareaInfo.appendChild(titleTarea)
            tareaHeader.appendChild(tareaBadge)
            tareaFooter.appendChild(delTarea)

            articleTarea.appendChild(tareaHeader)
            articleTarea.appendChild(tareaFooter)

            //* Se agrega la funcionalidad del checkbox de "Completado de cada tarea"
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    tarea.completado = true
                    counterInit++
                    articleTarea.classList.add('tarea-selected')
                } else {
                    tarea.completado = false
                    counterInit--
                    articleTarea.classList.remove('tarea-selected')
                }
                actualizarContadores()
                counterTareasInit.textContent = counterInit
                guardarItem('tareas', tareas)
            })
            checkbox.checked = tarea.completado

            //* Se crea totalmente y se adjunta al contenedor general de tareas
            tareasContainer.appendChild(articleTarea)

        });
    }

}
import { activarModulo } from "./router.js";
import { leerItem } from "./storage.js";
import { crearTarea } from "./tareas/tareas.js";
import { renderizarTareas } from "./tareas/tareasUI.js";
import { abrirModal } from "./modalNotas.js";

renderizarTareas()
activarModulo('notas')
const agregarTarea = document.querySelector('.add-tarea')

agregarTarea.addEventListener('click', () => {
    crearTarea()
    renderizarTareas()
})

const agregarNota = document.querySelector('.add-note')
const ModalNota = document.querySelector('.overlay')

agregarNota.addEventListener('click', () => {
    ModalNota.classList.remove('oculto')
})

const cerrarModal = document.querySelector('.cerrar-modal')

cerrarModal.addEventListener('click', () => {
    ModalNota.classList.add('oculto')
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !ModalNota.classList.contains('oculto')) {
        ModalNota.classList.add('oculto')
    }
})
import { activarModulo } from "./router.js";
import { leerItem } from "./storage.js";
import { crearTarea } from "./tareas/tareas.js";
import { renderizarTareas } from "./tareas/tareasUI.js";
import { AbrirModal, btnUpdateNota, CerrarModal } from "./modalNotas.js";
import { crearNota } from "./notas/notas.js";
import { renderizarNotas } from "./notas/notasUI.js";

renderizarTareas()
renderizarNotas()
activarModulo('tareas')
const agregarTarea = document.querySelector('.add-tarea')

agregarTarea.addEventListener('click', () => {
    crearTarea()
    renderizarTareas()
})

const btnCrearNota = document.querySelector('.crear-nota')
btnCrearNota.addEventListener('click', () => {
    crearNota()
    renderizarNotas()
})

const cerrarModal = document.querySelector('.cerrar-modal')
cerrarModal.addEventListener('click', () => {
    CerrarModal()
})

const ModalNota = document.querySelector('.overlay')
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !ModalNota.classList.contains('oculto')) {
        CerrarModal()
    }
})

const abrirModalNota = document.querySelector('.add-note')
abrirModalNota.addEventListener('click', () => {
    AbrirModal()
})

const btnBorrarNota = document.querySelector('.del-nota')
btnBorrarNota.addEventListener('click', () => {
    borrarNota()
})

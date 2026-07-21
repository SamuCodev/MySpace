import { activarModulo } from "./router.js";
import { leerItem } from "./storage.js";
import { crearTarea } from "./tareas/tareas.js";
import { renderizarTareas } from "./tareas/tareasUI.js";
import { abrirModal, CerrarModal } from "./modalNotas.js";

abrirModal()
CerrarModal()
renderizarTareas()
activarModulo('tareas')
const agregarTarea = document.querySelector('.add-tarea')

agregarTarea.addEventListener('click', () => {
    crearTarea()
    renderizarTareas()
})

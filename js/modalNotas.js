import { renderizarNotas } from "./notas/notasUI.js"
import { borrarNota, actualizarNota } from "./notas/notas.js"
import { btnCrearNota } from "./main.js"

//*Se capturan los inputs del HTML
export let titleNota = document.querySelector('.nota-title')
export let textoNota = document.querySelector('.nota-desc')
export let colorNota = document.querySelector('.color-nota-selector')

/*
 * Esta variable funciona como la responsable de seleccionar
 *  la nota correcta a la cual se le esta aplicando una actualizacion
 */

export let notaEnEdicion = null

//*Se capturan los botones del HTML
const btnBorrarNota = document.querySelector('.del-nota')
const ModalNota = document.querySelector('.overlay')
const btnUpdateNota = document.querySelector('.upd-nota')
//*Se oculta el boton de actualizar al empezar
btnUpdateNota.classList.add('oculto')

//! FUNCION QUE ABRE EL MODAL
export const AbrirModal = () => {
    //*Se remueve la clase oculto paara poder mostrar el modal
    ModalNota.classList.remove('oculto')
}

//! FUNCION QUE ABRE EL MODAL PARA ACTUALIZAR UNA NOTA
export const AbrirModalUpdate = (nota) => {
    //*La nota en edicion sera el id de la nota que se clickeo
    notaEnEdicion = nota.id
    /*
     *   Lo que sucede aca esque se captura el boton crearNota
     *  y se oculta para poder agregar el boton de actualizar
     *  que anteriormente estaba oculto ya que solo se puede
     *  utilizar si se va actualizar una nota, de resto solo
     *  se puede crear o borrar.
     */
    const btnCrearNota = document.querySelector('.crear-nota')
    btnUpdateNota.classList.remove("oculto")
    btnCrearNota.classList.add("oculto")
    btnBorrarNota.removeAttribute('disabled')
    //*Se reestablecen los datos para poderse editar y ver
    titleNota.value = nota.titulo
    textoNota.value = nota.texto
    colorNota.value = nota.color
    AbrirModal()
}

/*
 *  Al darle click al boton de borrar se borra la nota
 * que tenia el id en la variable de notaEnEdicion,
 * luego se cierra y se renderizan todas las notas de nuevo
 */
btnBorrarNota.addEventListener('click', () => {
    borrarNota(notaEnEdicion)
    CerrarModal()
    renderizarNotas()
})

//! FUNCION QUE CIERRA EL MODAL
export const CerrarModal = () => {
    /*
     * Se agrega la clase "oculto" para que se cierre totalmente
     *  luego se restaura la variable "notaEnEdicion" y asimismo
     *  todos los campos como el titulo, texto y color, luego se
     *  ocultan el boton de actualizar y se vuelve a mostrar el boton
     *  de crear
     */
    ModalNota.classList.add('oculto')
    notaEnEdicion = null
    titleNota.value = ""
    textoNota.value = ""
    colorNota.value = "#000000"

    btnUpdateNota.classList.add('oculto')
    btnCrearNota.classList.remove('oculto')
    btnBorrarNota.setAttribute('disabled', 'disabled')
}

btnUpdateNota.addEventListener('click', () => {

    /*
     * Llamamos a la funcion actualizarNota y le pasamos todos los parametros, para luego
     * reestablecer todos los datos del input, renderizar las tareas de nuevo y cerrar el modal
     */
    actualizarNota(notaEnEdicion, titleNota.value, textoNota.value, colorNota.value)
    titleNota.value = ""
    textoNota.value = ""
    colorNota.value = "#000000"
    renderizarNotas()
    CerrarModal()
})

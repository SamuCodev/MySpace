import { renderizarNotas } from "./notas/notasUI.js"
import { borrarNota, actualizarNota } from "./notas/notas.js"

export let titleNota = document.querySelector('.nota-title')
export let textoNota = document.querySelector('.nota-desc')
export let colorNota = document.querySelector('.color-nota-selector')


export let notaEnEdicion = null
const btnBorrarNota = document.querySelector('.del-nota')
const ModalNota = document.querySelector('.overlay')
const btnUpdateNota = document.querySelector('.upd-nota')
btnUpdateNota.classList.add('oculto')

export const AbrirModal = () => {
    ModalNota.classList.remove('oculto')
}

export const AbrirModalUpdate = (nota) => {
    notaEnEdicion = nota.id
    const btnCrearNota = document.querySelector('.crear-nota')
    btnUpdateNota.classList.remove("oculto")
    btnCrearNota.classList.add("oculto")
    btnBorrarNota.removeAttribute('disabled')
    titleNota.value = nota.titulo
    textoNota.value = nota.texto
    colorNota.value = nota.color
    AbrirModal()
}

btnBorrarNota.addEventListener('click', () => {
    borrarNota(notaEnEdicion)
    CerrarModal()
    renderizarNotas()
})


export const CerrarModal = () => {
    ModalNota.classList.add('oculto')
    notaEnEdicion = null
    titleNota.value = ""
    textoNota.value = ""
    colorNota.value = "#000000"
}

btnUpdateNota.addEventListener('click', () => {
    actualizarNota(notaEnEdicion, titleNota.value, textoNota.value, colorNota.value)
    titleNota.value = ""
    textoNota.value = ""
    colorNota.value = "#000000"
    renderizarNotas()
    CerrarModal()
})

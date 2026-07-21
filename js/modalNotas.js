const agregarNota = document.querySelector('.add-note')
const ModalNota = document.querySelector('.overlay')

agregarNota.addEventListener('click', () => {
    ModalNota.classList.remove('oculto')
})

const cerrarModal = document.querySelector('.cerrar-modal')


export const abrirModal = () => {
    cerrarModal.addEventListener('click', () => {
        ModalNota.classList.add('oculto')
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !ModalNota.classList.contains('oculto')) {
            ModalNota.classList.add('oculto')
        }
    })
}

const ModalNota = document.querySelector('.overlay')
export const btnUpdateNota = document.querySelector('.upd-nota')
btnUpdateNota.classList.add('oculto')

export const AbrirModal = () => {
    ModalNota.classList.remove('oculto')
}

export const CerrarModal = () => {
    ModalNota.classList.add('oculto')
}



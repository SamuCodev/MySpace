const tareasSection = document.querySelector('.tareas-section')
const notasSection = document.querySelector('.notas-section')
const habitosSection = document.querySelector('.habitos-section')

const tareasButton = document.querySelector('#tareas-btn')
const notasButton = document.querySelector('#notas-btn')
const habitosButton = document.querySelector('#habitos-btn')

const navBar = [
    { id: "tareas", seccion: tareasSection, boton: tareasButton },
    { id: "notas", seccion: notasSection, boton: notasButton },
    { id: "habitos", seccion: habitosSection, boton: habitosButton }
]

export const activarModulo = (id) => {
    navBar.forEach(modulo => {
        if (modulo.id === id) {
            modulo.seccion.classList.remove('oculto')
            modulo.boton.classList.add('selected')
        } else {
            modulo.seccion.classList.add('oculto')
            modulo.boton.classList.remove('selected')
        }
    });
}

navBar.forEach(modulo => {
    modulo.boton.addEventListener('click', () => {
        if (modulo.id == "habitos") {
            alert("Esta seccion aun esta en proceso...")
        } else {
            activarModulo(modulo.id)
        }
    })
});
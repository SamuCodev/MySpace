import { AbrirModal, btnUpdateNota, CerrarModal } from "../modalNotas.js"
import { leerItem, guardarItem } from "../storage.js"
import { tareas } from "../tareas/tareas.js"

let titleNota = document.querySelector('.nota-title')
let textoNota = document.querySelector('.nota-desc')
let colorNota = document.querySelector('.color-nota-selector')

export const notas = leerItem('notas', [])

let siguienteId = leerItem('idNotas', 1)
const guardarSiguienteId = () => {
    guardarItem('idNotas', siguienteId)
}

export const crearNota = () => {
    if (titleNota.value != "" && textoNota.value != "") {
        const fecha = new Date()
        let nuevaNota = {
            id: siguienteId,
            titulo: titleNota.value,
            texto: textoNota.value,
            color: colorNota.value,
            fecha: fecha,
            fijado: false
        }
        notas.push(nuevaNota)
        guardarItem('notas', notas)
        CerrarModal()
        siguienteId++
        guardarSiguienteId()
        titleNota.value = ""
        textoNota.value = ""
        colorNota.value = "#000000"
        return nuevaNota

    } else if (titleNota.value == "") {
        alert('Ingresa un titulo valido!')
    } else {
        alert('No se pueden crear notas con la descripcion vacia')
    }
}

// export const editarNota = (nota) => {
//     const btnBorrarNota = document.querySelector('.del-nota')
//     const btnCrearNota = document.querySelector('.crear-nota')
//     btnUpdateNota.classList.remove("oculto")
//     btnCrearNota.classList.add("oculto")
//     btnBorrarNota.removeAttribute('disabled')
//     titleNota.value = nota.titulo
//     textoNota.value = nota.texto
//     colorNota.value = nota.color
//     AbrirModal()

//     if (titleNota.value != nota.titulo || textoNota.value != nota.texto || colorNota.value != nota.color) {
//         nota.titulo = titleNota.value
//         nota.texto = textoNota.value
//         nota.color = colorNota.value


//         //     const notaActualizada = {
//         //         id: nota.id,
//         //         titulo: titleNota.value,
//         //         texto: textoNota.value,
//         //         color: colorNota,
//         //         fecha: nota.fecha
//     }

//     //     const index = notas.findIndex(s => s.id === nota.id)
//     //     const index.
//     // }

//     btnUpdateNota.addEventListener('click', () => {
//         CerrarModal()
//         guardarItem('notas', notas)
//         renderizarNotas()
//         console.log(notas)
//     })
// }

// export const borrarNota = (id) => {
//     const index = notas.findIndex(s => s.id === id)
//     notas.splice(index, 1)
//     guardarItem('notas', notas)
//     CerrarModal()
//     console.log(notas)

// }
import { leerItem, guardarItem } from "../storage.js"

export const notas = leerItem('notas', [])

let siguienteId = leerItem('idNotas', 1)
const guardarSiguienteId = () => {
    guardarItem('idNotas', siguienteId)
}

export const crearNota = (titulo, texto, color) => {
    if (titulo != "" && texto != "") {
        const fecha = new Date()
        let nuevaNota = {
            id: siguienteId,
            titulo: titulo,
            texto: texto,
            color: color,
            fecha: fecha,
            fijado: false
        }
        notas.push(nuevaNota)
        guardarItem('notas', notas)
        siguienteId++
        guardarSiguienteId()
        return nuevaNota


    } else if (titulo == "") {
        alert('Ingresa un titulo valido!')
    } else {
        alert('No se pueden crear notas con la descripcion vacia')
    }
}

export const actualizarNota = (id, titulo, texto, color) => {
    let index = notas.findIndex(s => s.id === id)
    if (index !== -1) {
        notas[index].titulo = titulo
        notas[index].texto = texto
        notas[index].color = color
        guardarItem('notas', notas)
    }
}

export const borrarNota = (id) => {
    const index = notas.findIndex(s => s.id === id)
    if (index !== -1) {
        notas.splice(index, 1)
        guardarItem('notas', notas)
        console.log(notas)
    }

}
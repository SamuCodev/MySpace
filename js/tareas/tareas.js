import { guardarItem, leerItem } from "../storage.js"

const inputTarea = document.querySelector('.tarea-input-user')
export const tareas = leerItem('tareas', [])

//!SE USA UN ID GUARDADO EN LOCALSTORAGE PARA QUE AL REINICIAR LA PAGINA NO HAYAN BUGS CON LOS IDS
let siguienteId = leerItem('idTareas', 1)
const guardarSiguienteId = () => {
    guardarItem('idTareas', siguienteId)
}

//!FUNCION QUE CREA EL OBJETO DE LA TAREA EN EL ARRAY
export const crearTarea = () => {
    if (inputTarea.value != "") {
        const hoy = new Date()
        let nuevaTarea = {
            id: siguienteId,
            title: inputTarea.value,
            date: hoy,
            completado: false
        }
        tareas.push(nuevaTarea)
        guardarItem('tareas', tareas)
        siguienteId++
        guardarSiguienteId()
        console.log(tareas)
        inputTarea.value = ""

        return nuevaTarea
    } else {
        alert('No se puede crear una tarea sin titulo')
    }
}

//! FUNCION QUE BORRA LA TAREA DEL ARRAY
export const borrarTarea = (id) => {
    const index = tareas.findIndex(i => i.id === id)
    if (index !== -1) {
        tareas.splice(index, 1)
        console.log(tareas)
        guardarItem('tareas', tareas)
    }
}
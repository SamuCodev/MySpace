import { guardarItem, leerItem } from "../storage.js"

/*
 * Se captura el input del usuario para el titulo de la tarea
 * luego se guardan las tareas en un array que se leera de localStorage
 * para verificar si hay tareas guardadas, si no hay tareas se devuelve un array vacio
 */
const inputTarea = document.querySelector('.tarea-input-user')
export const tareas = leerItem('tareas', [])

//!SE USA UN ID GUARDADO EN LOCALSTORAGE PARA QUE AL REINICIAR LA PAGINA NO HAYAN BUGS CON LOS IDS
let siguienteId = leerItem('idTareas', 1)
const guardarSiguienteId = () => {
    guardarItem('idTareas', siguienteId)
}

//!FUNCION QUE CREA EL OBJETO DE LA TAREA EN EL ARRAY
export const crearTarea = () => {
    /*
     * Se verifica que el input del usuario no este vacio, luego se toma la fecha
     * y se crea el objeto con toda la informacion necesaria como titulo, fecha y
     * si esta completado o no
     */
    if (inputTarea.value != "") {
        const hoy = new Date()
        let nuevaTarea = {
            id: siguienteId,
            title: inputTarea.value,
            date: hoy,
            completado: false
        }
        //* Se pushea la tarea nueva al array y luego se guarda en LocalStorage
        tareas.push(nuevaTarea)
        guardarItem('tareas', tareas)
        //* Se incrementa el Id y se guarda en LocalStorage
        siguienteId++
        guardarSiguienteId()
        console.log(tareas)
        inputTarea.value = ""
        return nuevaTarea
        //* Si el campo del titulo de la tarea esta vacio se muestra un mensaje
    } else {
        alert('No se puede crear una tarea sin titulo')
    }
}

//! FUNCION QUE BORRA LA TAREA DEL ARRAY
export const borrarTarea = (id) => {
    //* En base al indice de la tarea que se vaya a borrar y se borra para luego guardar en memoria
    const index = tareas.findIndex(i => i.id === id)
    if (index !== -1) {
        tareas.splice(index, 1)
        console.log(tareas)
        guardarItem('tareas', tareas)
    }
}
import { leerItem, guardarItem } from "../storage.js"

/*
 *  Se lee el array de notas, si no hay nada guardado
 *  en localStoage se muestra por defecto un array vacio
 */
export const notas = leerItem('notas', [])

/*
 *  Lo mismo con el Id de cada nota, se lee el localStorage
 *  y si no hay nada pues por defecto se empieza con uno.
 *  Abajo de este esta la funcion para guardar el id, este
 *  se llama cada vez que se crea un objeto para que ninguna
 *  nota tenga un id similar y evitar errores al borrar y 
 *  actualizar
 */
let siguienteId = leerItem('idNotas', 1)
const guardarSiguienteId = () => {
    guardarItem('idNotas', siguienteId)
}

//! FUNCION QUE CREA EL OBJETO DE NOTAS
export const crearNota = (titulo, texto, color) => {
    /*
     *  Si el titulo no esta vacio y el texto de la descripcion
     *  tampoco esta vacio se crea el objeto, primero desglosando
     *  la fecha, y luego se crea el objeto con toda la informacion
     *  capturada de los inputs del usuario
     */
    if (titulo != "" && texto != "") {
        let fechaHoy = new Date()
        let dia = fechaHoy.getDate()
        let mes = fechaHoy.getMonth() + 1
        let año = fechaHoy.getFullYear()
        let nuevaNota = {
            id: siguienteId,
            titulo: titulo,
            texto: texto,
            color: color,
            fechaDia: dia,
            fechaMes: mes,
            fechaAño: año,
            fijado: false
        }
        //*Se pushea al array de notas y se guarda en LocalStorage
        notas.push(nuevaNota)
        guardarItem('notas', notas)
        //*Se incrementa el Id y se guarda
        siguienteId++
        guardarSiguienteId()
        return nuevaNota

        //* Caso contrario si hay algun campo vacio se muestra una alerta y no se crea
    } else if (titulo == "") {
        alert('Ingresa un titulo valido!')
    } else {
        alert('No se pueden crear notas con la descripcion vacia')
    }
}

//! FUNCION QUE ACTUALIZA LA INFORMACION DE LA NOTA
export const actualizarNota = (id, titulo, texto, color) => {

    /*
     *  Se busca el indice de la nota que tenga el mismo id
     *  de la nota que se captura, luego se verifica que sea
     *  diferente a -1 y luego de eso se procede a actualizar
     *  los datos del objetos para finalmente guardar en
     *  LocalStorage
     */
    let index = notas.findIndex(s => s.id === id)
    if (index !== -1) {
        notas[index].titulo = titulo
        notas[index].texto = texto
        notas[index].color = color
        guardarItem('notas', notas)
    }
}

//! FUNCION QUE BORRA UNA NOTA
export const borrarNota = (id) => {

    /*
     *   En base a un indice que sera el id de la nota a la cual
     *  se quiera borrar, se verificara que sea diferente a -1,
     *  y luego se borrara en base al indice un solo elemento del
     *  Array, para luego guardar el array en LocalStorage
     */
    const index = notas.findIndex(s => s.id === id)
    if (index !== -1) {
        notas.splice(index, 1)
        guardarItem('notas', notas)
        console.log(notas)
    }

}
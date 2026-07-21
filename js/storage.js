export const guardarItem = (key, value) => {
    const textoConvertido = JSON.stringify(value)
    localStorage.setItem(key, textoConvertido)
}

export const leerItem = (key, itemDefecto) => {
    let itemLeido = localStorage.getItem(key)
    if (itemLeido === null) {
        return itemDefecto
    } else {
        return JSON.parse(itemLeido)
    }
}
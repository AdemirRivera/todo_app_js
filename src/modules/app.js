// importacion de modulos
import html from './app.html?raw'

/**
 * @description Este es el módulo principal de la aplicación y es el encargado de inicializar la aplicación.
 * @param {String} element_id_param 
 */

export const AppFtn = (element_id_param) => {

    // validación de parámetros
    if (typeof element_id_param !== 'string') {
        throw new Error('El parámetro debe ser un string')
        return
    }

    if (element_id_param === undefined || element_id_param === null) {
        throw new Error('El parámetro es obligatorio')
        return
    }

    // cuando la funcion AppFtn es llamada
    (() => {
        const APP_CONST = document.createElement('div')
        APP_CONST.innerHTML = html
        document.querySelector(element_id_param).append(APP_CONST)
    })()
}

// develop by: Ademir Rivera 2023
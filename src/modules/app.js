// importacion de modulos
import html from './app.html?raw'

/**
 * REVIEW: Este es el módulo principal de la aplicación y es el encargado de inicializar la aplicación.
 * @param {String} element_id_param 
 */

export const AppFtn = (element_id_param) => {

    // validación de parámetros
    if (typeof element_id_param !== 'string') {
        throw new Error('El parámetro debe ser un string')
    }

    // cuando la funcion AppFtn es llamada
    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(element_id_param).append(app)
    })()
}

// develop by: Ademir Rivera 2023
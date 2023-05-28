// importacion de librerias
import { v4 as uuid } from 'uuid'
export class Todo_Class {
    /**
     * @description: este es el constructor de la clase Todo
     * @param {String} description_param
     */
    constructor(description_param) {

        // validación de parámetros
        if (description_param === undefined || description_param === null) {
            throw new Error('La descripción es obligatoria')
            return
        }

        if (typeof description_param !== 'string') {
            throw new Error('La descripción debe ser un string')
            return
        }

        this.id = uuid()
        this.description = description_param
        this.done = false
        this.created_at = new Date()
    }
}

// develop by: Ademir Rivera 2023
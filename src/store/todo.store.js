import { Todo_Class } from '../modules/models/todo.model'

/**
 * @description este es el objeto que contiene los tipos de filtros
 * @type {Object}
 * @property {String} all (todos)
 * @property {String} active (activos)
 * @property {String} completed (completados)
 */
const TYPE_FILTERS_CONST = {
    all: 'all',
    active: 'active',
    completed: 'completed'
}

const state = {
    todos: [
        new Todo_Class('Tarea de prueba 1'),
        new Todo_Class('Tarea de prueba 2'),
        new Todo_Class('Tarea de prueba 3'),
    ],
    filter: TYPE_FILTERS_CONST.all
}

/**
 * @description este es el método que inicializa el store
 */
const InitStoreFtn = () => {
    console.log(state);
    console.log('init store')
}

export default {
    InitStoreFtn
}

// develop by: Ademir Rivera 2023
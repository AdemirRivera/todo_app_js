// importacion de modulos
import './style.css'
import { AppFtn } from './src/modules/app'
import todoStore from './src/store/todo.store'

todoStore.InitStoreFtn()

// llamada a la funcion principal
AppFtn('#app')

// develop by: Ademir Rivera 2023
import { Todo } from "@/interfaces/todo"

const STORAGE_KEY = 'todos'
export const getAllTodos = (): Todo[] => {
    const todoStr = localStorage.getItem(STORAGE_KEY)
    if(!todoStr){
        return []
    }
    return JSON.parse(todoStr)
}

export const saveAllTodos = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


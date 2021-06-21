import {Todo} from '@/interfaces'
import * as dal from '@/dal'

export const insert = (state: Todo[], title: string): Todo[] => {
  const newItem: Todo = {
    id: Date.now(),
    title,
    completed: false,
  }
  console.log([...state,newItem])
  return [...state, newItem]
}

export const remove = (state: Todo[], id: number) => {
  return state.filter((todo) => todo.id !== id)
}
export const toggle = (state: Todo[], id: number) => {
  return state.map((todo) => {
    return todo.id === id 
      ? {
          ...todo,
          completed: !todo.completed
        }
      : todo
  })
}
export const loadAll = () => {
  return dal.getAllTodos()
}
export const saveAll = (state: Todo[]) => {
  dal.saveAllTodos(state)
  return state
}



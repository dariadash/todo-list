import { Todo } from "@/interfaces"
import {TodoActions} from './types'
import { insert, loadAll, remove, saveAll, toggle } from "./actions";

export const todoReducer = (state: Todo[] | undefined, action: any): Todo[] => {
  if (typeof state === 'undefined') {
    return loadAll()
  }
  console.log(action)
  switch (action.type) {
    case TodoActions.insert: {
      saveAll(state) 
      return insert(state,action.title) 
    }
    case TodoActions.remove: {
      return remove(state,action.id) 
    }
    case TodoActions.toggle: {
      return toggle(state,action.id) 
    }
    case TodoActions.loadAll:{
      return loadAll() 
    }
    case TodoActions.saveAll:{
      return saveAll(state) 
    }
    default: return state;
  }
}
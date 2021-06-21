import { Todo } from "@/interfaces"
import {TodoActions} from './types'
import { insert, loadAll, remove, saveAll, toggle } from "./actions";

export const todoReducer = (state = loadAll(), action: any): Todo[] => {
  switch (action) {
    case TodoActions.insert: return insert(state,action.title)
    case TodoActions.remove: return remove(state,action.id)
    case TodoActions.toggle: return toggle(state,action.id)
    case TodoActions.loadAll: return loadAll()
    case TodoActions.saveAll: return saveAll(state)
    default: return state;
  }
}
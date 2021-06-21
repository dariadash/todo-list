import React from 'react'
import {Provider} from 'react-redux'
import { todoStore } from '../../model/store'
import {TodoForm, TodoList} from '../molecule'


export const TodoPage = () => (
    <Provider store={todoStore}>
        <TodoForm />
        <TodoList />
    </Provider>
)
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Todo } from '@/interfaces/todo'
import {TodoItem} from '../atom'
import { TodoActions } from '../../model'

export const TodoList = () => {
    const todos = useSelector((todos: Todo[]) => todos)
    const dispatch = useDispatch()
    const renderItem = (todo: Todo) => (
        <TodoItem 
            key={todo.id} 
            title={todo.title}
            completed={todo.completed}
            onClick={() => dispatch({type: TodoActions.toggle, id: todo.id})}
            onDelete={() => dispatch({type: TodoActions.remove, id: todo.id})}
        />
    )
    return (
        <ListWrapper>
            {todos.map(renderItem)}
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    max-width: 800px;
    margin: auto;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
`  
import React, { useCallback } from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {Button} from '@/ui'
import { TodoActions } from '../../model';

export const TodoForm = () => {
    const [title, setTitle]  = React.useState('');
    const dispatch = useDispatch()

    const addTask = React.useCallback(() => {
        dispatch({
            type: TodoActions.insert,
            title
        })
        setTitle('')
    },[title])
    return (
        <FormWrapper>
            <TaskInput 
                placeholder={'Название задачи'}
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={() => addTask()}>
                Добавить
            </Button>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    padding: 15px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: auto;
    margin-top: 24px;
`

const TaskInput = styled.input`
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid #111;
`
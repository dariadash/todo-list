import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {Button} from '@/ui'
import { TodoActions } from '../../model';

export const TodoForm = () => {
    const [title, setTitle]  = React.useState('');
    const dispatch = useDispatch()
    return (
        <FormWrapper>
            <TaskInput 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={() => dispatch({type: TodoActions.insert, title })}>
                Добавить
            </Button>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    padding: 15px;
    border: 1px solid #ccc;
`

const TaskInput = styled.input`
    padding: 8px;
    border: 1px solid #111;
`
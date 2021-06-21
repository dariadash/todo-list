import React from 'react'
import styled, { css } from 'styled-components'
import {Button} from '@/ui'

type Props = {
    title: string,
    completed: boolean,
    onClick: () => void
    onDelete: () => void
}

export const TodoItem = ({title, completed, onClick, onDelete}: Props) => (
    <TodoWrapper completed={completed} onClick={() => onClick()}>
        <TodoText>
            {title}
        </TodoText>
        <Button danger onClick={() => onDelete()}>
            Удалить
        </Button>
    </TodoWrapper>
)

type TodoItemProps = {
    completed: boolean
}

const TodoWrapper = styled.div<TodoItemProps>`
    ${({completed}) => completed && css`
        background-color: #9ca;
    `}
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #CCC;
    &:hover {
        background-color: #EEE;
    }
`

const TodoText = styled.div`
    margin-left: 16px;
`
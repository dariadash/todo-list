import styled, { css } from "styled-components";

type ButtonProps = {
    danger?: boolean
}

export const Button = styled.button<ButtonProps>`
    background-color: #9ca;
    color: #111;
    ${({danger}) => danger && css`
        background-color: #A11;
        color: #fff;
    `}
    padding: 10px;
    border: none;
`
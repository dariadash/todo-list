import React from 'react'
import styled from 'styled-components'
import {Link} from '@/ui'

export const Navbar: React.FunctionComponent = () => (
    <NavbarContainer>
        <NavbarWrapper>
            <Link to={'/'}>Список задач</Link>
            <Link to={'/about'}>О приложении</Link>
        </NavbarWrapper>
    </NavbarContainer>
)

const NavbarContainer = styled.div`
    height: 50px;
    border: 1px solid #ccc;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const NavbarWrapper = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    flex: 1;
`
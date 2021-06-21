import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { TodoPage } from './features/todo-list/view'
import { Navbar } from './ui'

const routes = [
    {
        path: '/',
        component: TodoPage
    },
    {
        path: '/about',
        component: () => (<></>)
    }
]

export const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            {routes.map(({path,component}) => <Route key={path} component={component} path={path} />)}
        </Switch>
    </BrowserRouter>
)
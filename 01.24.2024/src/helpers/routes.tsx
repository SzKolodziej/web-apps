import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'

interface RouteElement{
    path: string
    element: React.JSX.Element
    name: string
}

export const routes:Array<RouteElement> = [
    {
        path: '/',
        element: <Home/>,
        name: 'Home'
    },
    {
        path: '/contact',
        element: <Contact/>,
        name: 'Contact'
    },
    {
        path: '/about',
        element: <About/>,
        name: 'About'
    }
]
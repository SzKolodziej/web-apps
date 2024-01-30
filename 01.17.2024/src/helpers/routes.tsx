import React from 'react'
import Home from '../pages/Home'
import About from "../pages/About";
import Contact from "../pages/Contact";

interface RouteElement{
    path: string
    element: React.JSX.Element
    name: string
    hideInNavbar?: boolean
}

export const routes: Array<RouteElement> = [
    {
        path: '/',
        element: <Home/>,
        name: 'Home',
    },
    {
        path: '/about',
        element: <About/>,
        name: 'About',
    },
    {
        path: '/contact',
        element: <Contact/>,
        name: 'Contact'
    }
]
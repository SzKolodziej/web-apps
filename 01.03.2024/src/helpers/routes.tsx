import React from "react"
import Home from '../pages/Home'
import Blog from '../pages/Blog'

interface RouteElement{
    path: string
    element: React.JSX.Element
    name: string
    hideInNavbar?: boolean
}

export const routes: Array<RouteElement> = [
    {
        path: "/",
        element: <Home />,
        name: "Home",
    },
    {
        path: "/blog",
        element: <Blog />,
        name: "Blog",
    }
]
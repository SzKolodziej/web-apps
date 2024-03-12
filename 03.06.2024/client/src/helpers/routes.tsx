import Homepage from "../pages/Homepage";
import React from "react";
import UpdateTrainer from "../pages/UpdateTrainer";
import Favourites from "../pages/Favourites";
import Badges from "../pages/Badges";
import Mongo from "../pages/Mongo";

interface RouteElement{
    path: string,
    element: React.JSX.Element,
    name: string
}

export const routes: Array<RouteElement> = [
    {
        path: '/',
        element: <Homepage/>,
        name: 'New Trainer'
    },
    {
        path: '/updateTrainer',
        element: <UpdateTrainer/>,
        name: 'Update Trainer'
    },
    {
        path: '/favourites',
        element: <Favourites/>,
        name: 'Favourites'
    },
    {
        path: '/badges',
        element: <Badges/>,
        name: 'Badges'
    },
    {
        path: '/mongo',
        element: <Mongo/>,
        name: 'Mongo'
    }
]
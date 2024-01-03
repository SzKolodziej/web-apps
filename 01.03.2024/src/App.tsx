import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Home from './pages/Home'
//import Blog from './pages/Blog'
import Navbar from "./components/Navbar";
import {routes} from "./helpers/routes.tsx"

export default function App(){

    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {routes.map((route)=>(
                    <Route
                        key = {route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}
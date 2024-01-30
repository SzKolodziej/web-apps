
import './App.css';
import {routes} from "./helpers/routes";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                {
                    routes.map((routes)=>(
                        <Route
                            key={routes.path}
                            path={routes.path}
                            element={routes.element}
                        />
                    ))
                }
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;

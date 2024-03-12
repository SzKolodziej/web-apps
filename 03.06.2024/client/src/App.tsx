import './App.css'
import Navbar from "./compoents/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./helpers/routes.tsx";

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
      </BrowserRouter>
  )
}

export default App

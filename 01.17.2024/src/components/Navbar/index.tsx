import {Link} from "react-router-dom"
import {routes} from "../../helpers/routes";

export default function Navbar(){
    return(
        <>
            <nav>
                {
                    routes.map((router)=>(
                        <li key={router.path}>
                            <Link to={router.path}>{router.name}</Link>
                        </li>
                    ))
                }
            </nav>
        </>
    )
}
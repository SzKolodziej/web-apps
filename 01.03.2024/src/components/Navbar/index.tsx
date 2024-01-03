import {routes} from '../../helpers/routes.tsx'
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <ul>
                {routes.map((route)=>(
                    <li key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
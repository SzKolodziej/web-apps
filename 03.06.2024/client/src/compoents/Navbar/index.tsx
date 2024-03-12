import {routes} from '../../helpers/routes.tsx'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
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

export default Navbar
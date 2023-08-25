import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mercury = () => {

    return(
        <>
            <nav>
                <ul className="page-nav mercury">
                    <NavLink to='/mercury' end><span>01</span> Overview </NavLink>
                    <NavLink to='/mercury/structure'><span>02</span> Structure </NavLink>
                    <NavLink to='/mercury/surface'><span>03</span> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Mercury

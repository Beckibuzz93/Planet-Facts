import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Jupiter = () => {
    return(
        <>
            <nav>
                <ul className="page-nav jupiter">
                    <NavLink to='/Jupiter' end> Overview </NavLink>
                    <NavLink to='/Jupiter/structure'> Structure </NavLink>
                    <NavLink to='/Jupiter/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Jupiter

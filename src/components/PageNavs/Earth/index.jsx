import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Earth = () => {
    return(
        <>
            <nav>
                <ul className="page-nav earth">
                    <NavLink to='/Earth' end> Overview </NavLink>
                    <NavLink to='/Earth/structure'> Structure </NavLink>
                    <NavLink to='/Earth/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Earth

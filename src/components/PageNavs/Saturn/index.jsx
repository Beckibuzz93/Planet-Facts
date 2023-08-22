import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Saturn = () => {
    return(
        <>
            <nav>
                <ul className="page-nav saturn">
                    <NavLink to='/Saturn' end> Overview </NavLink>
                    <NavLink to='/Saturn/structure'> Structure </NavLink>
                    <NavLink to='/Saturn/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Saturn

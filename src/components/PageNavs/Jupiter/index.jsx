import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Jupiter = () => {
    return(
        <>
            <nav>
                <ul className="page-nav jupiter">
                    <NavLink to='/jupiter' end> Overview </NavLink>
                    <NavLink to='/jupiter/structure'> Structure </NavLink>
                    <NavLink to='/jupiter/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Jupiter

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mars = () => {
    return(
        <>
            <nav>
                <ul className="page-nav mars">
                    <NavLink to='/Mars' end> Overview </NavLink>
                    <NavLink to='/Mars/structure'> Structure </NavLink>
                    <NavLink to='/Mars/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Mars

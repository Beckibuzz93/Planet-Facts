import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Venus = () => {
    return(
        <>
            <nav>
                <ul className="page-nav venus">
                    <NavLink to='/Venus' end> Overview </NavLink>
                    <NavLink to='/Venus/structure'> Structure </NavLink>
                    <NavLink to='/Venus/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Venus

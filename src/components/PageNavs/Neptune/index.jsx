import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Neptune = () => {

    return(
        <>
            <nav>
                <ul className="page-nav neptune">
                    <NavLink to='/Neptune' end> Overview </NavLink>
                    <NavLink to='/Neptune/structure'> Structure </NavLink>
                    <NavLink to='/Neptune/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Neptune

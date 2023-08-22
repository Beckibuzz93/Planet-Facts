import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Uranus = () => {

    return(
        <>
            <nav>
                <ul className="page-nav uranus">
                    <NavLink to='/Uranus' end> Overview </NavLink>
                    <NavLink to='/Uranus/structure'> Structure </NavLink>
                    <NavLink to='/Uranus/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Uranus

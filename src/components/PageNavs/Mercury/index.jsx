import { NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react';

import './index.css'

const Mercury = () => {

    return(
        <>
            <nav>
                <ul className="page-nav mercury">
                    <NavLink to='/mercury' end> Overview </NavLink>
                    <NavLink to='/mercury/structure'> Structure </NavLink>
                    <NavLink to='/mercury/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Mercury

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Earth = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Earth' end> Overview </NavLink>
                    <NavLink style={styles} to='/Earth/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Earth/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Earth

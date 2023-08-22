import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Saturn = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Saturn' end> Overview </NavLink>
                    <NavLink style={styles} to='/Saturn/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Saturn/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Saturn

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mercury = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/mercury' end> Overview </NavLink>
                    <NavLink style={styles} to='/mercury/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/mercury/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Mercury

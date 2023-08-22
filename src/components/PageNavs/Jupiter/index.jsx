import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Jupiter = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Jupiter' end> Overview </NavLink>
                    <NavLink style={styles} to='/Jupiter/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Jupiter/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Jupiter

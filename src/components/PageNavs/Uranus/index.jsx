import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Uranus = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Uranus' end> Overview </NavLink>
                    <NavLink style={styles} to='/Uranus/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Uranus/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Uranus

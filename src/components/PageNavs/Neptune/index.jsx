import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Neptune = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Neptune' end> Overview </NavLink>
                    <NavLink style={styles} to='/Neptune/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Neptune/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Neptune

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mars = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Mars' end> Overview </NavLink>
                    <NavLink style={styles} to='/Mars/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Mars/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Mars

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Venus = () => {
    const styles = ({ isActive }) => ({ 
        color: isActive ? '#FFF' : '#838391'
    });
    return(
        <>
            <nav>
                <ul className="navbar-mer">
                    <NavLink style={styles} to='/Venus' end> Overview </NavLink>
                    <NavLink style={styles} to='/Venus/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Venus/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Venus

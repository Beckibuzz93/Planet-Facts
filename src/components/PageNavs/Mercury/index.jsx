import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mercury = () => {
    const styles = ({ isActive }) => ({
        borderBottom: isActive ? '3px solid #419EBB' : '', 
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav mercury">
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

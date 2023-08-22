import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Earth = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #6D2ED5' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav earth">
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

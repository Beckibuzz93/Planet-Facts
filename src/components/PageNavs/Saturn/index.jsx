import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Saturn = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #CD5120' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav saturn">
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

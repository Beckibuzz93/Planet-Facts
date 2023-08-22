import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Neptune = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #2D68F0' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav neptune">
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

import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Jupiter = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #D83A34' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav jupiter">
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

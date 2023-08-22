import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Mars = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #D14C32' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav mars">
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

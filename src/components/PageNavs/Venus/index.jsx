import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Venus = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #EDA249' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav venus">
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

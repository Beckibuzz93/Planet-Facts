import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const Uranus = () => {
    const styles = ({ isActive }) => ({ 
        borderBottom: isActive ? '3px solid #1ec2a4' : '',
        color: isActive ? '#FFF' : '#838391',
        marginBottom: isActive ? '0rem' : ''
    });
    return(
        <>
            <nav>
                <ul className="page-nav uranus">
                    <NavLink style={styles} to='/Uranus' end> Overview </NavLink>
                    <NavLink style={styles} to='/Uranus/structure'> Structure </NavLink>
                    <NavLink style={styles} to='/Uranus/surface'> Surface </NavLink>
                </ul>
            </nav>

            <Outlet />

        </>
    )
}

export default Uranus

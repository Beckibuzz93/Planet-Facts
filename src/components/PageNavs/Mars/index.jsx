import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #D14C32' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const MarsNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Mars"> Overview </NavLink>
                <NavLink style={styles} to="/MarsStructure"> Structure </NavLink>
                <NavLink style={styles} to="/MarsSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default MarsNav

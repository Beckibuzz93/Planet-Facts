import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #EDA249' : '', 
    color: isActive ? '#FFF' : '#CD5120'
});

const SaturnNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Saturn"> Overview </NavLink>
                <NavLink style={styles} to="/SaturnStructure"> Structure </NavLink>
                <NavLink style={styles} to="/SaturnSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default SaturnNav

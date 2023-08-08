import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #EDA249' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const VenusNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Venus"> Overview </NavLink>
                <NavLink style={styles} to="/VenusStructure"> Structure </NavLink>
                <NavLink style={styles} to="/VenusSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default VenusNav

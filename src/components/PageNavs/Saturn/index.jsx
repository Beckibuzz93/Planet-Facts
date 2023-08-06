import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const SaturnNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Saturn"> Overview </NavLink>
                <NavLink to="/SaturnStructure"> Structure </NavLink>
                <NavLink to="/SaturnSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default SaturnNav

import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const MarsNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Mars"> Overview </NavLink>
                <NavLink to="/MarsStructure"> Structure </NavLink>
                <NavLink to="/MarsSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default MarsNav

import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const JupiterNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Jupiter"> Overview </NavLink>
                <NavLink to="/JupiterStructure"> Structure </NavLink>
                <NavLink to="/JupiterSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default JupiterNav

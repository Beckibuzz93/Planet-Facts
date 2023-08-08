import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #D83A34' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const JupiterNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Jupiter"> Overview </NavLink>
                <NavLink style={styles} to="/JupiterStructure"> Structure </NavLink>
                <NavLink style={styles} to="/JupiterSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default JupiterNav

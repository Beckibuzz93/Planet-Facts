import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #419EBB' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const MercuryNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Mercury"> Overview </NavLink>
                <NavLink style={styles} to="/MercuryStructure"> Structure </NavLink>
                <NavLink style={styles} to="/MercurySurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default MercuryNav

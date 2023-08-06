import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const MercuryNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Mercury"> Overview </NavLink>
                <NavLink to="/MercuryStructure"> Structure </NavLink>
                <NavLink to="/MercurySurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default MercuryNav

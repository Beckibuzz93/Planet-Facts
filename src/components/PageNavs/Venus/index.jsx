import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const VenusNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Venus"> Overview </NavLink>
                <NavLink to="/VenusStructure"> Structure </NavLink>
                <NavLink to="/VenusSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default VenusNav

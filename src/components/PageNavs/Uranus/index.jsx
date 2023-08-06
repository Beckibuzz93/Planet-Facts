import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const UranusNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Uranus"> Overview </NavLink>
                <NavLink to="/UranusStructure"> Structure </NavLink>
                <NavLink to="/UranusSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default UranusNav

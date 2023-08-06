import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const EarthNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Earth"> Overview </NavLink>
                <NavLink to="/EarthStructure"> Structure </NavLink>
                <NavLink to="/EarthSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default EarthNav

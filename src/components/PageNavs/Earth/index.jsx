import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({ 
    borderBottom: isActive ? '3px solid #2D68F0' : '',
    color: isActive ? '#FFF' : '#838391'
 });

const EarthNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Earth"> Overview </NavLink>
                <NavLink style={styles} to="/EarthStructure"> Structure </NavLink>
                <NavLink style={styles} to="/EarthSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default EarthNav

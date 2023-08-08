import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #1ec2a4' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const UranusNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Uranus"> Overview </NavLink>
                <NavLink style={styles} to="/UranusStructure"> Structure </NavLink>
                <NavLink style={styles} to="/UranusSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default UranusNav

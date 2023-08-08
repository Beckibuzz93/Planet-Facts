import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

const styles = ({ isActive }) => ({
    borderBottom: isActive ? '3px solid #2D68F0' : '', 
    color: isActive ? '#FFF' : '#838391'
});

const NeptuneNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink style={styles} to="/Neptune"> Overview </NavLink>
                <NavLink style={styles} to="/NeptuneStructure"> Structure </NavLink>
                <NavLink style={styles} to="/NeptuneSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default NeptuneNav

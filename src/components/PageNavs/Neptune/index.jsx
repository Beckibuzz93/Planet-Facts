import React from 'react'
import { NavLink } from 'react-router-dom'


import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const NeptuneNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to="/Neptune"> Overview </NavLink>
                <NavLink to="/NeptuneStructure"> Structure </NavLink>
                <NavLink to="/NeptuneSurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default NeptuneNav

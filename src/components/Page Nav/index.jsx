import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import * as Pages from '../../pages'

import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const PageNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <NavLink to='/Mercury'> Overview </NavLink>
                <NavLink to="/MercuryStructure"> Structure </NavLink>
                <NavLink to="/MercurySurface"> Surface </NavLink>
            </div>
        </>
    )
}

export default PageNav

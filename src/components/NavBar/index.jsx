import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const styles = ({ isActive }) => ({ color: isActive ? '#FFF' : '#929292' });

const NavBar = () => {
    return(
        <>
            <nav>
                <NavLink style={styles} to="/"> Home </NavLink>
                <NavLink style={styles} to="/Mercury"> Mercury </NavLink>
                <NavLink style={styles} to="/Venus"> Venus </NavLink>
                <NavLink style={styles} to="/Earth"> Earth </NavLink>
                <NavLink style={styles} to="/Mars"> Mars </NavLink>
                <NavLink style={styles} to="/Jupiter"> Jupiter </NavLink>
                <NavLink style={styles} to="/Saturn"> Saturn </NavLink>
                <NavLink style={styles} to="/Uranus"> Uranus </NavLink>
                <NavLink style={styles} to="/Neptune"> Neptune </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar

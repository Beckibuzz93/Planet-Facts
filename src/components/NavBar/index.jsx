import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const styles = ({ isActive }) => ({ color: isActive ? '#FFF' : '#929292' });

const NavBar = () => {
    const [burgerNav, setBurgerNav] = useState(false);
    const BurgerNavClick = () => {
      setBurgerNav(!burgerNav);
    }
    return(
        <>
            <header>
                <div className='icon'>
                    <h5> The Planets </h5>
                </div>
                <nav className='navigation'>
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

                <div onClick={BurgerNavClick} className='burger-nav'>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                    <div className='burger-line'></div>
                </div>

                <div className={`burger-nav-items ${burgerNav && 'active'}`}>
                    <ul>
                        <li>
                            <div>
                                <div className='ball grey-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/"> Home </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball baby-blue-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Mercury"> Mercury </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball yellow-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Venus"> Venus </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball light-purple-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Earth"> Earth </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball orange-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Mars"> Mars </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball red-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Jupiter"> Jupiter </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball dark-orange-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Saturn"> Saturn </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball green-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Uranus"> Uranus </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div className='ball light-blue-bg'></div>
                                <NavLink onClick={BurgerNavClick} style={styles} to="/Neptune"> Neptune </NavLink>
                            </div>
                            <div className='arrow-container'>
                                <div className='arrow-right'></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar

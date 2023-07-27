import React, {useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './index.css'

const styles = ({ isActive }) => ({ color: isActive ? '#FFF' : '#929292' });

const NavBar = () => {
    const [isMenuClicked, setMenuClicked] = useState(true);
    const [burgerClass, setBurgerClass] = useState('burger-line unclicked');
    const [menuClass, setMenuClass] = useState('burger-nav-items');

    const BurgerNavClick = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-line unclicked')
            setMenuClass('burger-nav-items')
        } else {
            setBurgerClass('burger-line clicked')
            setMenuClass('burger-nav-items active')
        }
        setMenuClicked(!isMenuClicked)
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
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>

                <div className={menuClass}>
                    <ul>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/"> 
                            <li>
                                <div>
                                    <div className='ball grey-bg'></div>
                                    <p>Home</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Mercury">                             
                            <li>
                                <div>
                                    <div className='ball baby-blue-bg'></div>
                                    <p>Mercury</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Venus"> 
                            <li>
                                <div>
                                    <div className='ball yellow-bg'></div>
                                    <p>Venus</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Earth"> 
                            <li>
                                <div>
                                    <div className='ball light-purple-bg'></div>
                                    <p>Earth</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Mars"> 
                            <li>
                                <div>
                                    <div className='ball orange-bg'></div>
                                    <p>Mars</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Jupiter">
                            <li>
                                <div>
                                    <div className='ball red-bg'></div>
                                    <p>Jupiter</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Saturn">
                            <li>
                                <div>
                                    <div className='ball dark-orange-bg'></div>
                                    <p>Saturn</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Uranus">
                            <li>
                                <div>
                                    <div className='ball green-bg'></div>
                                    <p>Uranus</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        <NavLink onClick={BurgerNavClick} style={styles} to="/Neptune">
                            <li>
                                <div>
                                    <div className='ball light-blue-bg'></div>
                                    <p>Neptune</p> 
                                </div>
                                <div className='arrow-container'>
                                    <div className='arrow-right'></div>
                                </div>
                            </li> 
                        </NavLink>
                        
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar

import React, {useState} from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import './index.css'

const NavBar = (props) => {
    const { pathname } = useLocation();
    console.log(pathname)

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
    const homeStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #fff' : '',
        color: isActive ? '#FFF' : '#929292' });
    const mercuryStyles = ({ isActive }) =>({
        borderTop: isActive ? '3px solid #419EBB' : '',
        color: isActive ? '#FFF' : '#929292'});    
    const venusStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #EDA249' : '',
        color: isActive ? '#FFF' : '#929292' });
    const earthStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #6D2ED5' : '',
        color: isActive ? '#FFF' : '#929292' });    
    const marsStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #CD5120' : '',
        color: isActive ? '#FFF' : '#929292' });
    const jupiterStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #D14C32' : '',
        color: isActive ? '#FFF' : '#929292' });          
    const saturnStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #CD5120' : '',
        color: isActive ? '#FFF' : '#929292' });    
    const uranusStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #1ec2a4' : '',
        color: isActive ? '#FFF' : '#929292' });
    const neptuneStyles = ({ isActive }) => ({ 
        borderTop: isActive ? '3px solid #2D68F0' : '',
        color: isActive ? '#FFF' : '#929292' });

    return(
        <>
            <header>
                <div className='icon'>
                    <h5> The Planets </h5>
                </div>
                <nav className='navigation'>
                    <NavLink className='home-link' style={homeStyles} to="/"> Home </NavLink>
                    <NavLink className='mercury-link' style={mercuryStyles} to="/Mercury"> Mercury </NavLink>
                    <NavLink className='venus-link' style={venusStyles} to="/Venus"> Venus </NavLink>
                    <NavLink className='earth-link' style={earthStyles} to="/Earth"> Earth </NavLink>
                    <NavLink className='mars-link' style={marsStyles} to="/Mars"> Mars </NavLink>
                    <NavLink className='jupiter-link' style={jupiterStyles} to="/Jupiter"> Jupiter </NavLink>
                    <NavLink className='saturn-link' style={saturnStyles} to="/Saturn"> Saturn </NavLink>
                    <NavLink className='uranus-link' style={uranusStyles} to="/Uranus"> Uranus </NavLink>
                    <NavLink className='neptune-link' style={neptuneStyles} to="/Neptune"> Neptune </NavLink>
                </nav>

                <div onClick={BurgerNavClick} className='burger-nav'>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>

                <div className={menuClass}>
                    <ul>
                        <NavLink onClick={BurgerNavClick} style={homeStyles} to="/"> 
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
                        <NavLink onClick={BurgerNavClick} to="/Mercury">                             
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
                        <NavLink onClick={BurgerNavClick} style={venusStyles} to="/Venus"> 
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
                        <NavLink onClick={BurgerNavClick} style={earthStyles} to="/Earth"> 
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
                        <NavLink onClick={BurgerNavClick} style={marsStyles} to="/Mars"> 
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
                        <NavLink onClick={BurgerNavClick} style={jupiterStyles} to="/Jupiter">
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
                        <NavLink onClick={BurgerNavClick} style={saturnStyles} to="/Saturn">
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
                        <NavLink onClick={BurgerNavClick} style={uranusStyles} to="/Uranus">
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
                        <NavLink onClick={BurgerNavClick} style={neptuneStyles} to="/Neptune">
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

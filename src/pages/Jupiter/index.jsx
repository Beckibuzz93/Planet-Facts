import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetJupiter from '../../assets/planet-jupiter.svg';

const Jupiter = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#D83A34' : '',
  });
  let sentence = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
  return (
    <>
        <PageNavs.JupiterNav pageNav='page-nav jupiter'/>

        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
          </div>
          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Jupiter' />

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Jupiter"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/JupiterStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/JupiterSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>

        </div>

        <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
    </>
  )
}

export default Jupiter

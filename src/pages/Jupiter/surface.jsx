import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as PageNavs from '../../components/PageNavs'

import PlanetJupiter from '../../assets/planet-jupiter.svg';

import JupiterSurfaceImg from '../../assets/geology-jupiter.png';

const JupiterSurface = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#D14C32' : '',
  });
  let sentence = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
  return (
    <>
        <PageNavs.JupiterNav pageNav='page-nav jupiter'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
            <Components.GeologyImage geologyImageClass='geo-img' geologyImg={JupiterSurfaceImg} altGeoImg='Jupiter geology illustration'/>
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

export default JupiterSurface

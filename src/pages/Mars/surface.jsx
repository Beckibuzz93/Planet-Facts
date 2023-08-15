import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMars from '../../assets/planet-mars.svg'

import MarsSurfaceImg from '../../assets/geology-mars.png';

const MarsSurface = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#D14C32' : '',
  });
  let sentence = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`
  return (
    <>
        <PageNavs.MarsNav pageNav='page-nav mars'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
            <Components.GeologyImage geologyImageClass='geo-img' geologyImg={MarsSurfaceImg} altGeoImg='Mars geology illustration'/>
          </div>
          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Mars'/>

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Mars"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MarsStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MarsSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>
        </div>
        <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
    </>
  )
}

export default MarsSurface

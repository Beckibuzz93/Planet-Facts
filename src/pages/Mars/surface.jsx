import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMars from '../../assets/planet-mars.svg'

import MarsSurfaceImg from '../../assets/geology-mars.png';

const MarsSurface = () => {
  let sentence = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`
  return (
    <>
        <PageNavs.MarsNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={MarsSurfaceImg} altGeoImg='Mars geology illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars'/>

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

        <div className='page-button-container'>
          <NavLink to="/Mars"><Buttons.MarsBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/MarsStructure"><Buttons.MarsBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/MarsSurface"><Buttons.MarsBtn num='03' buttonName='Surface' /></NavLink>
        </div>

        <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
    </>
  )
}

export default MarsSurface

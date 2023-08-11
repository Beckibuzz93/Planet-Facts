import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetUranus from '../../assets/planet-uranus-internal.svg'

const Saturn = () => {
  let sentence = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`
  return (
    <>
        <PageNavs.UranusNav pageNav='page-nav uranus'/>
        <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
        <Components.PageMainTitle pageMainTitle='Uranus' />
        
        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

          <div className='page-button-container'>
            <NavLink to="/Uranus"><Buttons.UranusBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/UranusStructure"><Buttons.UranusBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/UranusSurface"><Buttons.UranusBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
    </>
  )
}

export default Saturn

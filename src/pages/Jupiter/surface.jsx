import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetJupiter from '../../assets/planet-jupiter.svg';

import JupiterSurfaceImg from '../../assets/geology-jupiter.png';

const JupiterSurface = () => {
  let sentence = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
  return (
    <>
        <PageNavs.JupiterNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={JupiterSurfaceImg} altGeoImg='Jupiter geology illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />
        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <NavLink to="/Jupiter"><Buttons.JupiterBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/JupiterStructure"><Buttons.JupiterBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/JupiterSurface"><Buttons.JupiterBtn num='03' buttonName='Surface' /></NavLink>
        </div>
    </>
  )
}

export default JupiterSurface

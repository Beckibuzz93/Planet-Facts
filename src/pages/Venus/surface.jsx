import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetVenus from '../../assets/planet-venus.svg'

import VenusSurfaceImg from '../../assets/geology-venus.png';

const VenusSurface = () => {
  const sentence = `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
  return (
    <>
        <PageNavs.VenusNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={VenusSurfaceImg} altGeoImg='Venus geology illustration'/>

        <Components.PageMainTitle pageMainTitle='Venus' />

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

        <div className='page-button-container'>
          <NavLink to="/Venus"><Buttons.VenusBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/VenusStructure"><Buttons.VenusBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/VenusSurface"><Buttons.VenusBtn num='03' buttonName='Surface' /></NavLink>
        </div>
    </>
  )
}

export default VenusSurface

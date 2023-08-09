import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetEarth from '../../assets/planet-earth.svg';
import EarthSurfaceImg from '../../assets/geology-earth.png';

const EarthSurface = () => {
  const sentence = `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`
  return (
    <>
        <PageNavs.EarthNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={EarthSurfaceImg} altGeoImg='Mercury geology illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth'/>

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>

        <div className='page-button-container'>
          <NavLink to='/Earth'><Buttons.EarthBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to='/EarthStructure'><Buttons.EarthBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to='/EarthSurface'><Buttons.EarthBtn num='03' buttonName='Surface' /></NavLink>
        </div>

        <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
    </>
  )
}

export default EarthSurface

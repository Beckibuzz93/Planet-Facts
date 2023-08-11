import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetEarth from '../../assets/planet-earth.svg';

const Earth = () => {
  const sentence = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`
  return (
    <>
        <PageNavs.EarthNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth'/>

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>

          <div className='page-button-container'>
            <NavLink to='/Earth'><Buttons.EarthBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to='/EarthStructure'><Buttons.EarthBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to='/EarthSurface'><Buttons.EarthBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
    </>
  )
}

export default Earth

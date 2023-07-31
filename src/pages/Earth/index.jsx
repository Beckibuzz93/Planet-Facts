import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetEarth from '../../assets/planet-earth.svg';
const Earth = () => {
  const sentence = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`
  return (
    <>
        <Components.PageNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth' />

        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <Buttons.EarthBtn num='01' buttonName='Overview' />
          <Buttons.EarthBtn num='02' buttonName='Structure' />
          <Buttons.EarthBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Earth

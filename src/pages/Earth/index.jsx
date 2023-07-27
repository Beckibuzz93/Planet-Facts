import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetEarth from '../../assets/planet-earth.svg';
const Earth = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth' />

        <div className='page-button-container'>
          <Buttons.EarthBtn num='01' buttonName='Overview' />
          <Buttons.EarthBtn num='02' buttonName='Structure' />
          <Buttons.EarthBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Earth

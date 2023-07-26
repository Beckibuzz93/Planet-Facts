import React from 'react'
import * as Components from '../../components'

import PlanetEarth from '../../assets/planet-earth.svg';
const Earth = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav earth'/>
        <Components.PageMainTitle pageMainTitle='Earth' />
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Image of Earth'/>
    </>
  )
}

export default Earth

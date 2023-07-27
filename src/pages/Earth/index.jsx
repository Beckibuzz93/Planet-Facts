import React from 'react'
import * as Components from '../../components'

import PlanetEarth from '../../assets/planet-earth.svg';
const Earth = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth' />
    </>
  )
}

export default Earth

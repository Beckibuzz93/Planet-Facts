import React from 'react'
import * as Components from '../../components'

import PlanetJupiter from '../../assets/planet-jupiter.svg';
const Jupiter = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />

    </>
  )
}

export default Jupiter

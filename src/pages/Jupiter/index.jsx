import React from 'react'
import * as Components from '../../components'

import PlanetJupiter from '../../assets/planet-jupiter.svg';
const Jupiter = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav jupiter'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Image of Jupiter'/>

    </>
  )
}

export default Jupiter

import React from 'react'
import * as Components from '../../components'

import PlanetMercury from '../../assets/planet-mercury.svg';

const Mercury = (props) => {
  return (
    <>
        <Components.PageNav pageNav='page-nav mercury'/>
        <Components.PageMainTitle pageMainTitle='Mercury' />
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Image of Mercury'/>
    </>
  )
}

export default Mercury

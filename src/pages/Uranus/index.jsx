import React from 'react'
import * as Components from '../../components'

import PlanetUranus from '../../assets/planet-uranus.svg'

const Uranus = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav uranus'/>
        <Components.PageMainTitle pageMainTitle='Uranus' />
        <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Image of Uranus'/>
    </>
  )
}

export default Uranus

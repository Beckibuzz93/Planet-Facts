import React from 'react'
import * as Components from '../../components'

import PlanetMars from '../../assets/planet-mars.svg'

const Mars = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars' />
    </>
  )
}

export default Mars

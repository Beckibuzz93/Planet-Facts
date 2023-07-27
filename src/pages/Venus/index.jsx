import React from 'react'
import * as Components from '../../components'

import PlanetVenus from '../../assets/planet-venus.svg'

const Venus = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
        <Components.PageMainTitle pageMainTitle='Venus' />
    </>
  )
}

export default Venus

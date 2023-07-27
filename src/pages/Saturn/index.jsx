import React from 'react'
import * as Components from '../../components'

import PlanetSaturn from '../../assets/planet-saturn.svg'

const Saturn = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav saturn'/>
        <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
        <Components.PageMainTitle pageMainTitle='Saturn' />
    </>
  )
}

export default Saturn

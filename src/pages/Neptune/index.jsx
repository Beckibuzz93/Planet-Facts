import React from 'react'
import * as Components from '../../components'

import PlanetNeptune from '../../assets/planet-neptune.svg'

const Neptune = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav neptune'/>
        <Components.PageMainTitle pageMainTitle='Neptune' />
        <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Image of Neptune'/>
    </>
  )
}

export default Neptune

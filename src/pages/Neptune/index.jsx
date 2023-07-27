import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetNeptune from '../../assets/planet-neptune.svg'

const Neptune = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav neptune'/>
        <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
        <Components.PageMainTitle pageMainTitle='Neptune' />

        <div className='page-button-container'>
          <Buttons.NeptuneBtn num='01' buttonName='Overview' />
          <Buttons.NeptuneBtn num='02' buttonName='Structure' />
          <Buttons.NeptuneBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Neptune

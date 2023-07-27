import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetSaturn from '../../assets/planet-saturn.svg'

const Saturn = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav saturn'/>
        <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
        <Components.PageMainTitle pageMainTitle='Saturn' />

        <div className='page-button-container'>
          <Buttons.SaturnBtn num='01' buttonName='Overview' />
          <Buttons.SaturnBtn num='02' buttonName='Structure' />
          <Buttons.SaturnBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Saturn

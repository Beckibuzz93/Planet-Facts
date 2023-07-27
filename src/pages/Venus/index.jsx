import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetVenus from '../../assets/planet-venus.svg'

const Venus = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
        <Components.PageMainTitle pageMainTitle='Venus' />

        <div className='page-button-container'>
          <Buttons.VenusBtn num='01' buttonName='Overview' />
          <Buttons.VenusBtn num='02' buttonName='Structure' />
          <Buttons.VenusBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Venus

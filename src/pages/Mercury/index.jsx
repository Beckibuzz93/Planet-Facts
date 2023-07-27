import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMercury from '../../assets/planet-mercury.svg';

const Mercury = (props) => {
  return (
    <>
        <Components.PageNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.PageMainTitle pageMainTitle='Mercury' />

        <div className='page-button-container'>
          <Buttons.MercuryBtn num='01' buttonName='Overview' />
          <Buttons.MercuryBtn num='02' buttonName='Structure' />
          <Buttons.MercuryBtn num='03' buttonName='Surface' />
        </div>

    </>
  )
}

export default Mercury

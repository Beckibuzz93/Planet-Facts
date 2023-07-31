import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMercury from '../../assets/planet-mercury-internal.svg';

const MercuryStructure = (props) => {
  const sentence = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
  return (
    <>
        <Components.PageNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.PageMainTitle pageMainTitle='Mercury' />

        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <Buttons.MercuryBtn num='01' buttonName='Overview' />
          <Buttons.MercuryBtn num='02' buttonName='Structure' />
          <Buttons.MercuryBtn num='03' buttonName='Surface' />
        </div>

    </>
  )
}

export default MercuryStructure

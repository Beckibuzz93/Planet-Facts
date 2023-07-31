import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMercury from '../../assets/planet-mercury.svg';

const Mercury = (props) => {
  const sentence = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`
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

export default Mercury

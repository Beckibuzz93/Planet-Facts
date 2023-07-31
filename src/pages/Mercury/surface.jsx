import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMercury from '../../assets/planet-mercury.svg';

import MercurySurfaceImg from '../../assets/geology-mercury.png';

const MercurySurface = (props) => {
  const sentence = `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`
  return (
    <>
        <Components.PageNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={MercurySurfaceImg} altGeoImg='Mercury geology illustration'/>
        
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

export default MercurySurface

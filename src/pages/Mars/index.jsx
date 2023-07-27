import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMars from '../../assets/planet-mars.svg'

const Mars = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars' />

        <div className='page-button-container'>
          <Buttons.MarsBtn num='01' buttonName='Overview' />
          <Buttons.MarsBtn num='02' buttonName='Structure' />
          <Buttons.MarsBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Mars

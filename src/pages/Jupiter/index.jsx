import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetJupiter from '../../assets/planet-jupiter.svg';
const Jupiter = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />

        <div className='page-button-container'>
          <Buttons.JupiterBtn num='01' buttonName='Overview' />
          <Buttons.JupiterBtn num='02' buttonName='Structure' />
          <Buttons.JupiterBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Jupiter

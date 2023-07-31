import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetJupiter from '../../assets/planet-jupiter.svg';
const Jupiter = () => {
  let sentence = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
  return (
    <>
        <Components.PageNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />
        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <Buttons.JupiterBtn num='01' buttonName='Overview' />
          <Buttons.JupiterBtn num='02' buttonName='Structure' />
          <Buttons.JupiterBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Jupiter

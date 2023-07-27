import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'


import PlanetUranus from '../../assets/planet-uranus.svg'

const Uranus = () => {
  return (
    <>
        <Components.PageNav pageNav='page-nav uranus'/>
        <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
        <Components.PageMainTitle pageMainTitle='Uranus' />

        <div className='page-button-container'>
          <Buttons.UranusBtn num='01' buttonName='Overview' />
          <Buttons.UranusBtn num='02' buttonName='Structure' />
          <Buttons.UranusBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Uranus

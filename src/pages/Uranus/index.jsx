import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'


import PlanetUranus from '../../assets/planet-uranus.svg'

const Uranus = () => {
  let sentence = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`
  return (
    <>
        <Components.PageNav pageNav='page-nav uranus'/>
        <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
        <Components.PageMainTitle pageMainTitle='Uranus' />
        <Components.PageMainStatement pageMainStatement={sentence}/>
        <div className='page-button-container'>
          <Buttons.UranusBtn num='01' buttonName='Overview' />
          <Buttons.UranusBtn num='02' buttonName='Structure' />
          <Buttons.UranusBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Uranus

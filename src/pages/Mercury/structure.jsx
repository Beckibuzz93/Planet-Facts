import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMercury from '../../assets/planet-mercury-internal.svg';

const MercuryStructure = (props) => {
  const sentence = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
  return (
    <>
        <PageNavs.MercuryNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.PageMainTitle pageMainTitle='Mercury' />

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>

        <div className='page-button-container'>
          <NavLink to="/Mercury"><Buttons.MercuryBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/MercuryStructure"><Buttons.MercuryBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/MercurySurface"><Buttons.MercuryBtn num='03' buttonName='Surface' /></NavLink>
        </div>

        <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>

    </>
  )
}

export default MercuryStructure

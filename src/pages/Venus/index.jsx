import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetVenus from '../../assets/planet-venus.svg'

const Venus = () => {
  const sentence = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
  return (
    <>
        <PageNavs.VenusNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>

        <Components.PageMainTitle pageMainTitle='Venus' />

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

        <div className='page-button-container'>
          <NavLink to="/Venus"><Buttons.VenusBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/VenusStructure"><Buttons.VenusBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/VenusSurface"><Buttons.VenusBtn num='03' buttonName='Surface' /></NavLink>
        </div>
    </>
  )
}

export default Venus

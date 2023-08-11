import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetVenus from '../../assets/planet-venus-internal.svg'

const VenusStructure = () => {
  const sentence = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
  return (
    <>
        <PageNavs.VenusNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
        <Components.PageMainTitle pageMainTitle='Venus' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

          <div className='page-button-container'>
            <NavLink to="/Venus"><Buttons.VenusBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/VenusStructure"><Buttons.VenusBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/VenusSurface"><Buttons.VenusBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
    </>
  )
}

export default VenusStructure

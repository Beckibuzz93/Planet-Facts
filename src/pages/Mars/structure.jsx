import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMars from '../../assets/planet-mars-internal.svg'

const MarsStructure = () => {
  let sentence = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
  return (
    <>
        <PageNavs.MarsNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars'/>

        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

        <div className='page-button-container'>
          <NavLink to="/Mars"><Buttons.MarsBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/MarsStructure"><Buttons.MarsBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/MarsSurface"><Buttons.MarsBtn num='03' buttonName='Surface' /></NavLink>
        </div>

        <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
    </>
  )
}

export default MarsStructure

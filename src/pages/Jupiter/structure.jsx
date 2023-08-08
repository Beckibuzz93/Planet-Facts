import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetJupiter from '../../assets/planet-jupiter-internal.svg';

const JupiterStructure = () => {
  let sentence = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
  return (
    <>
        <PageNavs.JupiterNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />
        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

        <div className='page-button-container'>
          <NavLink to="/Jupiter"><Buttons.JupiterBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/JupiterStructure"><Buttons.JupiterBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/JupiterSurface"><Buttons.JupiterBtn num='03' buttonName='Surface' /></NavLink>
        </div>

        <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
    </>
  )
}

export default JupiterStructure

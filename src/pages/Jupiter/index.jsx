import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetJupiter from '../../assets/planet-jupiter.svg';

const Jupiter = () => {
  let sentence = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
  return (
    <>
        <PageNavs.JupiterNav pageNav='page-nav jupiter'/>
        <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
        <Components.PageMainTitle pageMainTitle='Jupiter' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

          <div className='page-button-container'>
            <NavLink to="/Jupiter"><Buttons.JupiterBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/JupiterStructure"><Buttons.JupiterBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/JupiterSurface"><Buttons.JupiterBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
    </>
  )
}

export default Jupiter

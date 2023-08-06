import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetEarth from '../../assets/planet-earth-internal.svg';

const EarthStructure = () => {
  const sentence = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`
  return (
    <>
        <PageNavs.EarthNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth' />

        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <NavLink to='/Earth'><Buttons.EarthBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to='/EarthStructure'><Buttons.EarthBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to='/EarthSurface'><Buttons.EarthBtn num='03' buttonName='Surface' /></NavLink>
        </div>
    </>
  )
}

export default EarthStructure

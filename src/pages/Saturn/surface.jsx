import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetSaturn from '../../assets/planet-saturn.svg'

import SaturnSurfaceImg from '../../assets/geology-saturn.png';

const SaturnSurface= () => {
  let sentence = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `
  return (
    <>
        <PageNavs.SaturnNav pageNav='page-nav saturn'/>
        <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={SaturnSurfaceImg} altGeoImg='Mercury geology illustration'/>
        <Components.PageMainTitle pageMainTitle='Saturn' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

          <div className='page-button-container'>
            <NavLink to="/Saturn"><Buttons.SaturnBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/SaturnStructure"><Buttons.SaturnBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/SaturnSurface"><Buttons.SaturnBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
    </>
  )
}

export default SaturnSurface

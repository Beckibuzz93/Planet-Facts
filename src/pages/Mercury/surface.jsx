import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMercury from '../../assets/planet-mercury.svg';

import MercurySurfaceImg from '../../assets/geology-mercury.png';

const MercurySurface = (props) => {
  const sentence = `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`
  return (
    <>
        <PageNavs.MercuryNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={MercurySurfaceImg} altGeoImg='Mercury geology illustration'/>
        
        <Components.PageMainTitle pageMainTitle='Mercury' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>

          <div className='page-button-container'>
            <NavLink to="/Mercury"><Buttons.MercuryBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/MercuryStructure"><Buttons.MercuryBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/MercurySurface"><Buttons.MercuryBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>

    </>
  )
}

export default MercurySurface

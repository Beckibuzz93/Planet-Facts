import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetUranus from '../../assets/planet-uranus.svg'

import UranusSurfaceImg from '../../assets/geology-uranus.png';

const Saturn = () => {
  let sentence = `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`
  return (
    <>
        <PageNavs.UranusNav pageNav='page-nav uranus'/>
        <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={UranusSurfaceImg} altGeoImg='Uranus geology illustration'/>
        <Components.PageMainTitle pageMainTitle='Uranus' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

          <div className='page-button-container'>
            <NavLink to="/Uranus"><Buttons.UranusBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/UranusStructure"><Buttons.UranusBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/UranusSurface"><Buttons.UranusBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
    </>
  )
}

export default Saturn

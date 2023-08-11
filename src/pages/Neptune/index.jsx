import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetNeptune from '../../assets/planet-neptune.svg'

const Neptune = () => {
  let sentence = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
  return (
    <>
        <PageNavs.NeptuneNav pageNav='page-nav neptune'/>
        <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
        <Components.PageMainTitle pageMainTitle='Neptune' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>

          <div className='page-button-container'>
            <NavLink to="/Neptune"><Buttons.NeptuneBtn num='01' buttonName='Overview' /></NavLink>
            <NavLink to="/NeptuneStructure"><Buttons.NeptuneBtn num='02' buttonName='Structure' /></NavLink>
            <NavLink to="/NeptuneSurface"><Buttons.NeptuneBtn num='03' buttonName='Surface' /></NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='16.08 hours' revolutionTime='164.79 years' radius='24.622 km' avgTemp='-201°C'/>
    </>
  )
}

export default Neptune

import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetNeptune from '../../assets/planet-neptune.svg'

import NeptuneSurfaceImg from '../../assets/geology-neptune.png';

const Neptune = () => {
  let sentence = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`
  return (
    <>
        <PageNavs.NeptuneNav pageNav='page-nav neptune'/>
        <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
        <Components.GeologyImage geologyImageClass='geo-img' geologyImg={NeptuneSurfaceImg} altGeoImg='Mercury geology illustration'/>

        <Components.PageMainTitle pageMainTitle='Neptune' />
        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>

        <div className='page-button-container'>
          <NavLink to="/Neptune"><Buttons.NeptuneBtn num='01' buttonName='Overview' /></NavLink>
          <NavLink to="/NeptuneStructure"><Buttons.NeptuneBtn num='02' buttonName='Structure' /></NavLink>
          <NavLink to="/NeptuneSurface"><Buttons.NeptuneBtn num='03' buttonName='Surface' /></NavLink>
        </div>
    </>
  )
}

export default Neptune

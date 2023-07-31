import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetSaturn from '../../assets/planet-saturn.svg'

const Saturn = () => {
  let sentence = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
  return (
    <>
        <Components.PageNav pageNav='page-nav saturn'/>
        <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
        <Components.PageMainTitle pageMainTitle='Saturn' />
        <Components.PageMainStatement pageMainStatement={sentence}/>
        <div className='page-button-container'>
          <Buttons.SaturnBtn num='01' buttonName='Overview' />
          <Buttons.SaturnBtn num='02' buttonName='Structure' />
          <Buttons.SaturnBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Saturn

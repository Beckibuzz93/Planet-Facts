import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetNeptune from '../../assets/planet-neptune.svg'

const Neptune = () => {
  let sentence = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
  return (
    <>
        <Components.PageNav pageNav='page-nav neptune'/>
        <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
        <Components.PageMainTitle pageMainTitle='Neptune' />
        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <Buttons.NeptuneBtn num='01' buttonName='Overview' />
          <Buttons.NeptuneBtn num='02' buttonName='Structure' />
          <Buttons.NeptuneBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Neptune

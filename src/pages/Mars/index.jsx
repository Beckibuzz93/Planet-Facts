import React from 'react'
import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'

import PlanetMars from '../../assets/planet-mars.svg'

const Mars = () => {
  let sentence = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
  return (
    <>
        <Components.PageNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars' />

        <Components.PageMainStatement pageMainStatement={sentence}/>

        <div className='page-button-container'>
          <Buttons.MarsBtn num='01' buttonName='Overview' />
          <Buttons.MarsBtn num='02' buttonName='Structure' />
          <Buttons.MarsBtn num='03' buttonName='Surface' />
        </div>
    </>
  )
}

export default Mars

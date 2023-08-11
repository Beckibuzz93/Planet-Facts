import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMars from '../../assets/planet-mars.svg'

const Mars = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#CD5120' : '',
  });
  let sentence = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
  return (
    <>
        <PageNavs.MarsNav pageNav='page-nav mars'/>
        <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
        <Components.PageMainTitle pageMainTitle='Mars'/>

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

          <div className='page-button-container'>
            <NavLink className='page-main-btn' style={styles} to="/Mars"><span>01</span>Overview</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/MarsStructure"><span>02</span>Structure</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/MarsSurface"><span>03</span>Surface</NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
    </>
  )
}

export default Mars

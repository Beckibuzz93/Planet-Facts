import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMars from '../../assets/planet-mars-internal.svg'

const MarsStructure = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#D14C32' : '',
  });
  let sentence = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
  return (
    <>
        <PageNavs.MarsNav pageNav='page-nav mars'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
          </div>

          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Mars'/>

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Mars"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MarsStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MarsSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>

        </div>

        <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
    </>
  )
}

export default MarsStructure

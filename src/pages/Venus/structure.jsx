import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetVenus from '../../assets/planet-venus-internal.svg'

const VenusStructure = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#EDA249' : '',
  });
  const sentence = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
  return (
    <>
        <PageNavs.VenusNav pageNav='page-nav venus'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
          </div>

          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Venus' />

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Venus"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/VenusStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/VenusSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
    </>
  )
}

export default VenusStructure

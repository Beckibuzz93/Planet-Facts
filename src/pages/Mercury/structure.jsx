import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMercury from '../../assets/planet-mercury-internal.svg';

const MercuryStructure = (props) => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#419EBB' : '',
  });
  const sentence = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
  return (
    <>
        <PageNavs.MercuryNav pageNav='page-nav mercury'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
          </div>
          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Mercury' />

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Mercury"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MercuryStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/MercurySurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>

        </div>

        <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>

    </>
  )
}

export default MercuryStructure

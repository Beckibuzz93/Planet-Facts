import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as PageNavs from '../../components/PageNavs'

import PlanetEarth from '../../assets/planet-earth.svg';

const Earth = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#6D2ED5' : '',
  });
  const sentence = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`
  return (
    <>
        <PageNavs.EarthNav pageNav='page-nav earth'/>

        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
          </div>

          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Earth'/>
            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>
              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to='/Earth'><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to='/EarthStructure'><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to='/EarthSurface'><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>
          
        </div>

        <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
    </>
  )
}

export default Earth

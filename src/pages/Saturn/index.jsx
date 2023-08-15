import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetSaturn from '../../assets/planet-saturn.svg'

const Saturn = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#EDA249' : '',
  });
  let sentence = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
  return (
    <>
        <PageNavs.SaturnNav pageNav='page-nav saturn'/>

        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
          </div>
          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Saturn' />

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Saturn"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/SaturnStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/SaturnSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>

        </div>

        <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
    </>
  )
}

export default Saturn

import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetVenus from '../../assets/planet-venus.svg'

const Venus = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#EDA249' : '',
  });
  const sentence = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
  return (
    <>
        <PageNavs.VenusNav pageNav='page-nav venus'/>
        <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
        <Components.PageMainTitle pageMainTitle='Venus' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

          <div className='page-button-container'>
            <NavLink className='page-main-btn' style={styles} to="/Venus"><span>01</span>Overview</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/VenusStructure"><span>02</span>Structure</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/VenusSurface"><span>03</span>Surface</NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
    </>
  )
}

export default Venus

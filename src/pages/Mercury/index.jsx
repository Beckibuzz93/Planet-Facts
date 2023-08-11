import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetMercury from '../../assets/planet-mercury.svg';

import './style.css'

const Mercury = (props) => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#419EBB' : '',
  });
  const sentence = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`
  return (
    <>
        <PageNavs.MercuryNav pageNav='page-nav mercury'/>
        <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
        <Components.PageMainTitle pageMainTitle='Mercury' />

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>

          <div className='page-button-container'>
            <NavLink className='page-main-btn' style={styles} to="/Mercury"><span>01</span>Overview</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/MercuryStructure"><span>02</span>Structure</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/MercurySurface"><span>03</span>Surface</NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>

    </>
  )
}

export default Mercury

import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetEarth from '../../assets/planet-earth-internal.svg';

const EarthStructure = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#2D68F0' : '',
  });
  const sentence = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`
  return (
    <>
        <PageNavs.EarthNav pageNav='page-nav earth'/>
        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth'/>

        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>

          <div className='page-button-container'>
            <NavLink className='page-main-btn' style={styles} to='/Earth'><span>01</span>Overview</NavLink>
            <NavLink className='page-main-btn' style={styles} to='/EarthStructure'><span>02</span>Structure</NavLink>
            <NavLink className='page-main-btn' style={styles} to='/EarthSurface'><span>03</span>Surface</NavLink>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
    </>
  )
}

export default EarthStructure

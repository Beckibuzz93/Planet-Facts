import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetSaturn from '../../assets/planet-saturn-internal.svg'

const SaturnStructure = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#EDA249' : '',
  });
  let sentence = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`
  return (
    <>
        <PageNavs.SaturnNav pageNav='page-nav saturn'/>
        <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
        <Components.PageMainTitle pageMainTitle='Saturn' />
        
        <div className='statement-and-button-container'>
          <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

          <div className='page-button-container'>
            <NavLink className='page-main-btn' style={styles} to="/Saturn"><span>01</span>Overview</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/SaturnStructure"><span>02</span>Structure</NavLink>
            <NavLink className='page-main-btn' style={styles} to="/SaturnSurface"><span>03</span>Surface</NavLink>
          </div>
        </div>
        <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
    </>
  )
}

export default SaturnStructure

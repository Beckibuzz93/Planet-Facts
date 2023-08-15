import React from 'react'
import { NavLink } from 'react-router-dom'

import * as Components from '../../components'
import * as Buttons from '../../components/Buttons'
import * as PageNavs from '../../components/PageNavs'

import PlanetUranus from '../../assets/planet-uranus.svg'

const Uranus = () => {
  const styles = ({ isActive }) => ({ 
    backgroundColor: isActive ? '#1ec2a4' : '',
  });
  let sentence = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`
  return (
    <>
        <PageNavs.UranusNav pageNav='page-nav uranus'/>
        <div className='main-big-screen-container'>
          <div className='main-big-screen-separator-one'>
            <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
          </div>
          <div className='main-big-screen-separator-two'>
            <Components.PageMainTitle pageMainTitle='Uranus' />

            <div className='statement-and-button-container'>
              <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

              <div className='page-button-container'>
                <NavLink className='page-main-btn' style={styles} to="/Uranus"><span>01</span>Overview</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/UranusStructure"><span>02</span>Structure</NavLink>
                <NavLink className='page-main-btn' style={styles} to="/UranusSurface"><span>03</span>Surface</NavLink>
              </div>
            </div>
          </div>
        </div>

        <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
    </>
  )
}

export default Uranus

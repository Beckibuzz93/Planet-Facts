import React from 'react'

import {MainTitle} from '../../components'
import {MainStatement} from '../../components'
import * as Buttons from '../../components/Buttons'

import './style.css'

const LandingPage = () => {
  return (
    <>
        <MainTitle mainTitle='The Planets' />
        <MainStatement mainStatement='A place to learn about our planets in the solar system. Choose which planet to learn about first below.' />
        <div className='landing-btn-container'>
          <Buttons.MercuryBtn num='01' buttonName='Mercury'/>
          <Buttons.VenusBtn num='02' buttonName='Venus'/>
          <Buttons.EarthBtn num='03' buttonName='Earth'/>
          <Buttons.MarsBtn num='04' buttonName='Mars'/>
          <Buttons.JupiterBtn num='05' buttonName='Jupiter'/>
          <Buttons.SaturnBtn num='06' buttonName='Saturn'/>
          <Buttons.UranusBtn num='07' buttonName='Uranus'/>
          <Buttons.NeptuneBtn num='08' buttonName='Neptune'/>
        </div>
        
    </>
  )
}

export default LandingPage

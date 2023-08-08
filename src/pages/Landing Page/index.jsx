import React from 'react'
import { Link } from 'react-router-dom'

import {MainTitle} from '../../components'
import {MainStatement} from '../../components'
import * as Buttons from '../../components/Buttons'

import './style.css'

const LandingPage = () => {
  return (
    <>
        <MainTitle/>
        <MainStatement mainStatement='A place to learn about our planets in the solar system. Choose which planet to learn about first below.' />
        <div className='landing-btn-container'>
          <Link to="/Mercury"><Buttons.MercuryBtn num='01' buttonName='Mercury'/></Link>
          <Link to="/Venus"><Buttons.VenusBtn num='02' buttonName='Venus'/></Link>
          <Link to="/Earth"><Buttons.EarthBtn num='03' buttonName='Earth'/></Link>
          <Link to="/Mars"><Buttons.MarsBtn num='04' buttonName='Mars'/></Link>
          <Link to="/Jupiter"><Buttons.JupiterBtn num='05' buttonName='Jupiter'/></Link>
          <Link to="/Saturn"><Buttons.SaturnBtn num='06' buttonName='Saturn'/></Link>
          <Link to="/Uranus"><Buttons.UranusBtn num='07' buttonName='Uranus'/></Link>
          <Link to="/Neptune"><Buttons.NeptuneBtn num='08' buttonName='Neptune'/></Link>
        </div>
        
    </>
  )
}

export default LandingPage

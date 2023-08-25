import React from 'react'
import { Link } from 'react-router-dom'
import planetNotFound from '../../assets/PlanetNotFound.svg'
import './index.css'

const PageNotFound = () => {
  return (
    <>
      <div className='page-not-found-container'>
        <h1>404</h1>
        <h3> Planet Not Found </h3>
        <p> To find your way back home <Link to='/'> click here </Link></p>

        <img src={planetNotFound} alt='non existing planet illustration' />
      </div>
        
    </>
  )
}

export default PageNotFound

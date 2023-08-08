import React from 'react'
import thePlanetsIcon from '../../assets/The Planets.png'
import './index.css'

const MainTitle = (props) => {

    return(
        <>
            <div className='title-icon-container'>
                <img className='planets-icon' src={thePlanetsIcon} alt='icon' />
            </div>
        </>
    )
}

export default MainTitle

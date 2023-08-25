import React from 'react'

import './index.css'


const PageMainInfo = (props) => {

    return(
        <>
            <div role='page-info' className='main-page-info-container'>
                <div className='main-page-info'>
                    <h4>Rotation time</h4>
                    <h5>{props.rotationTime}</h5>
                </div>
                <div className='main-page-info'>
                    <h4>Revolution time</h4>
                    <h5>{props.revolutionTime}</h5>
                </div>
                <div className='main-page-info'>
                    <h4>radius</h4>
                    <h5>{props.radius}</h5>
                </div>
                <div className='main-page-info'>
                    <h4>average temp.</h4>
                    <h5>{props.avgTemp}</h5>
                </div>
            </div>
        </>
    )
}

export default PageMainInfo

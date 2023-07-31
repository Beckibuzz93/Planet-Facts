import React from 'react'

import './index.css'

const GeologyImage = (props) => {

    return(
        <>
            <div className='geology-image-container'>
                <img className={props.geologyImageClass} src={props.geologyImg} alt={props.altGeoImg} />
            </div>
        </>
    )
}

export default GeologyImage

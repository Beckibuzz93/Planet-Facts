import React from 'react'

import './index.css'

const Mars = (props) => {

    return(
        <>
            <button className='main-btn mars-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Mars

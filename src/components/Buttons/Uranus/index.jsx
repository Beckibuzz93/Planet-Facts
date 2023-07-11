import React from 'react'

import './index.css'

const Uranus = (props) => {

    return(
        <>
            <button className='main-btn uranus-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Uranus

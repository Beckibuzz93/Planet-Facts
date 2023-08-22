import React from 'react'

import './index.css'

const Mercury = (props) => {

    return(
        <>
            <button className='main-btn merc-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Mercury

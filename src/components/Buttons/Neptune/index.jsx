import React from 'react'

import './index.css'

const Neptune = (props) => {

    return(
        <>
            <button className='main-btn neptune-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Neptune

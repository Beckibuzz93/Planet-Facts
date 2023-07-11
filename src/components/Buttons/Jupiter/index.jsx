import React from 'react'

import './index.css'

const Jupiter = (props) => {

    return(
        <>
            <button className='main-btn jupiter-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Jupiter

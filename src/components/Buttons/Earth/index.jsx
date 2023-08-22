import React from 'react'

import './index.css'

const Button = (props) => {

    return(
        <>
            <button className='main-btn earth-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Button

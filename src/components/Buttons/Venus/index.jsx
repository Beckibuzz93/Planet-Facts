import React from 'react'

import './index.css'

const Venus = (props) => {

    return(
        <>
            <button className='main-btn venus-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Venus

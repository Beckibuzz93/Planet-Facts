import React from 'react'

import './index.css'

const Saturn = (props) => {

    return(
        <>
            <button className='main-btn saturn-btn'><span>{props.num}</span>{props.buttonName} </button>
        </>
    )
}

export default Saturn

import React from 'react'

import './index.css'

const MainStatement = (props) => {

    return(
        <>
            <p role='main-statement' className='main-statement'>{props.mainStatement}</p>
        </>
    )
}

export default MainStatement

import React from 'react'

import './index.css'

const PageMainTitle = (props) => {

    return(
        <>
            <h2 role='page-main-title' className='pages-main-title'>{props.pageMainTitle}</h2>
        </>
    )
}

export default PageMainTitle

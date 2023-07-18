import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const PageNav = (props) => {

    return(
        <>
            <div className='page-nav'>
                <Link to={props.overviewLink}>Overview</Link>
                <Link to={props.structureLink}>Structure</Link>
                <Link to={props.surfaceLink}>Surface</Link>
            </div>
        </>
    )
}

export default PageNav

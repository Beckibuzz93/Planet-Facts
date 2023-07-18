import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

//const styles = ({ isActive }) => ({ color: isActive ? '#DAF7A6' : '#CD5C5C' });

const PageNav = (props) => {

    return(
        <>
            <div className={props.pageNav}>
                <Link  to={props.overviewLink}>Overview</Link>
                <Link  to={props.structureLink}>Structure</Link>
                <Link  to={props.surfaceLink}>Surface</Link>
            </div>
        </>
    )
}

export default PageNav

import React from 'react'

import './index.css'
import arrowIcon from '../../assets/icon-source.svg'

const PageMainStatement = (props) => {

    return(
        <>
            <div className='page-main-statement-container'>
                <h4 role='page-main-statement' className='page-main-statement'>{props.pageMainStatement}</h4>
                <div role='wiki-link' className='wiki-link'>
                    <p>Source:</p>
                    <a target="_blank" href={props.wikiLink}>Wikipedia
                        <img className='wiki-icon' src={arrowIcon} alt='arrow icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default PageMainStatement

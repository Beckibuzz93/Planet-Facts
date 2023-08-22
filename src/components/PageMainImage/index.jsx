import React from 'react'

import './index.css'

const MainImage = (props) => {

    return(
        <>
            <div className='page-img-container'>
                <img className={props.pageMainImage} src={props.mainImg} alt={props.altImg} />
            </div>
        </>
    )
}

export default MainImage

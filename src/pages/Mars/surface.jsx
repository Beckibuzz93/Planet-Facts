import { NavLink } from 'react-router-dom'
import * as Components from '../../components'

import PlanetMars from '../../assets/planet-mars.svg'

import MarsSurfaceImg from '../../assets/geology-mars.png';
import './index.css'
const MarsSurface = () => {
    let sentence = `Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={MarsSurfaceImg} altGeoImg='Mars geology illustration'/>
                </div>

            <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Mars'/>

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className=" mars">
                            <NavLink to='/mars' end><span>01</span> Overview </NavLink>
                            <NavLink to='/mars/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/mars/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
        </>
    )
}

export default MarsSurface

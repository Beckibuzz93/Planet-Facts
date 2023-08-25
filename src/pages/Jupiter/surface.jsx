import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetJupiter from '../../assets/planet-jupiter.svg';

import JupiterSurfaceImg from '../../assets/geology-jupiter.png';
import './index.css'
const JupiterSurface = () => {
    let sentence = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={JupiterSurfaceImg} altGeoImg='Jupiter geology illustration'/>
                </div>

                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Jupiter' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>
                    </div>
                    <nav className="page-navigation">
                        <ul className="jupiter">
                            <NavLink to='/jupiter' end><span>01</span> Overview </NavLink>
                            <NavLink to='/jupiter/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/jupiter/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
            <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
        </>
    )
}

export default JupiterSurface

import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetNeptune from '../../assets/planet-neptune.svg'

import NeptuneSurfaceImg from '../../assets/geology-neptune.png';
import './index.css'
const NeptuneSurface = () => {
    let sentence = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={NeptuneSurfaceImg} altGeoImg='Mercury geology illustration'/>
                </div>
                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Neptune' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className="neptune">
                            <NavLink to='/neptune' end><span>01</span> Overview </NavLink>
                            <NavLink to='/neptune/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/neptune/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='16.08 hours' revolutionTime='164.79 years' radius='24.622 km' avgTemp='-201°C'/>
        </>
    )
}

export default NeptuneSurface

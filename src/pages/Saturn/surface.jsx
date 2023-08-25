import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetSaturn from '../../assets/planet-saturn.svg'

import SaturnSurfaceImg from '../../assets/geology-saturn.png';
import './index.css'
const SaturnSurface = () => {
    let sentence = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={SaturnSurfaceImg} altGeoImg='Mercury geology illustration'/>
                </div>
                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Saturn' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className="saturn">
                            <NavLink to='/saturn' end><span>01</span> Overview </NavLink>
                            <NavLink to='/saturn/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/saturn/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
        </>
    )
}

export default SaturnSurface

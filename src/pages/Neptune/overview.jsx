import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetNeptune from '../../assets/planet-neptune.svg'
import './index.css'
const NeptuneOverview = () => {
    let sentence = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
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

export default NeptuneOverview

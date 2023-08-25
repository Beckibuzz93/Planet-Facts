import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetSaturn from '../../assets/planet-saturn-internal.svg'
import './index.css'
const SaturnStructure = () => {
    let sentence = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
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

export default SaturnStructure

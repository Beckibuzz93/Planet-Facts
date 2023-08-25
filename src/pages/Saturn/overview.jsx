import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetSaturn from '../../assets/planet-saturn.svg'
import './index.css'
const SaturnOverview = () => {
    let sentence = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
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

export default SaturnOverview

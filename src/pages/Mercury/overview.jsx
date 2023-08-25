import { NavLink } from 'react-router-dom'

import * as Components from '../../components'

import PlanetMercury from '../../assets/planet-mercury.svg';

import './index.css'

const MercuryOverview = () => {
    const sentence = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`
    return(
        <>
        <div className='page-main-container'>
            <div className='page-main-image-container'>
                <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
            </div>

                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Mercury' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className="mercury">
                            <NavLink to='/mercury' end><span>01</span> Overview </NavLink>
                            <NavLink to='/mercury/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/mercury/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            
            <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>
        </>
    )
}

export default MercuryOverview

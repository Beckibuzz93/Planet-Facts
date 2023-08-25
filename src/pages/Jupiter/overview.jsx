import { NavLink } from 'react-router-dom'
import * as Components from '../../components'

import PlanetJupiter from '../../assets/planet-jupiter.svg';
import './index.css'
const JupiterOverview = () => {
    let sentence = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
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

export default JupiterOverview

import { NavLink, Outlet } from 'react-router-dom'

import * as Components from '../../components'

import PlanetMercury from '../../assets/planet-mercury.svg';

import MercurySurfaceImg from '../../assets/geology-mercury.png';
import './index.css'
const MercurySurface = () => {
    const sentence = `Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={MercurySurfaceImg} altGeoImg='Mercury geology illustration'/>
                </div>

                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Mercury' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>
                    </div>

                    <nav className="page-navigation">
                            <ul className=" mercury">
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

export default MercurySurface

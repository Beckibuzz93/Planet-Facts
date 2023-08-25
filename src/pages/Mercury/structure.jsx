import { NavLink, Outlet } from 'react-router-dom'

import * as Components from '../../components'

import PlanetMercury from '../../assets/planet-mercury-internal.svg';

import './index.css'
const MercuryStructure = () => {
    const sentence = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
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

export default MercuryStructure

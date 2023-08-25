import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetUranus from '../../assets/planet-uranus-internal.svg'
import './index.css'
const UranusStructure = () => {
    let sentence = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
                </div>
                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Uranus' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className="uranus">
                            <NavLink to='/uranus' end><span>01</span> Overview </NavLink>
                            <NavLink to='/uranus/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/uranus/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
        </>
    )
}

export default UranusStructure

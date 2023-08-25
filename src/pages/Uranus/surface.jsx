import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetUranus from '../../assets/planet-uranus.svg'

import UranusSurfaceImg from '../../assets/geology-uranus.png';
import './index.css'
const UranusSurface = () => {
    let sentence = `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={UranusSurfaceImg} altGeoImg='Uranus geology illustration'/>
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

export default UranusSurface

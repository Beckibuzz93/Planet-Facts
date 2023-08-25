import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetEarth from '../../assets/planet-earth.svg';
import EarthSurfaceImg from '../../assets/geology-earth.png';
import './index.css'
const EarthSurface = () => {
    const sentence = `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
                    <Components.GeologyImg geologyImageClass='geo-img' geologyImg={EarthSurfaceImg} altGeoImg='Mercury geology illustration'/>
                </div>
                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Earth'/>
                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className=" earth">
                            <NavLink to='/earth' end><span>01</span> Overview </NavLink>
                            <NavLink to='/earth/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/earth/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
            <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
        </>
    )
}

export default EarthSurface

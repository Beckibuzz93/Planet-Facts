import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetEarth from '../../assets/planet-earth-internal.svg';
import './index.css'
const EarthStructure = () => {
    const sentence = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`
    return(
        <>
          <div className='page-main-container'>
            <div className='page-main-image-container'>
              <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
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

export default EarthStructure

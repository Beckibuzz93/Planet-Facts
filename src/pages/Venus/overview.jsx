import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetVenus from '../../assets/planet-venus.svg'
import './index.css'
const VenusOverview = () => {
    const sentence = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
                </div>
                <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Venus' />

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className="venus">
                            <NavLink to='/venus' end><span>01</span> Overview </NavLink>
                            <NavLink to='/venus/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/venus/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
        </>
    )
}

export default VenusOverview

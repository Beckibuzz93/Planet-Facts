import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetVenus from '../../assets/planet-venus-internal.svg'
import './index.css'
const VenusStructure = () => {
    const sentence = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
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

export default VenusStructure

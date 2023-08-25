import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetJupiter from '../../assets/planet-jupiter-internal.svg';
import './index.css'
const JupiterStructure = () => {
    let sentence = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
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

export default JupiterStructure

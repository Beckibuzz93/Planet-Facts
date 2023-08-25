import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetUranus from '../../assets/planet-uranus.svg'
import './index.css'
const UranusOverview = () => {
    let sentence = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`
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

export default UranusOverview

import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetMars from '../../assets/planet-mars.svg'
const MarsOverview = () => {
    let sentence = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
    return(
        <>
            <div className='page-main-container'>
                <div className='page-main-image-container'>
                    <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>
                </div>
            <div className='main-page-container'>
                    <div className='title-and-statement-container'>
                        <Components.PageMainTitle pageMainTitle='Mars'/>

                        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>
                    </div>

                    <nav className="page-navigation">
                        <ul className=" mars">
                            <NavLink to='/mars' end><span>01</span> Overview </NavLink>
                            <NavLink to='/mars/structure'><span>02</span> Structure </NavLink>
                            <NavLink to='/mars/surface'><span>03</span> Surface </NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
            <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
        </>
    )
}

export default MarsOverview

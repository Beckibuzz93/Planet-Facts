import { NavLink } from 'react-router-dom'
import * as Components from '../../components'
import PlanetMars from '../../assets/planet-mars-internal.svg'

import './index.css'
const MarsStructure = () => {
    let sentence = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
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

export default MarsStructure

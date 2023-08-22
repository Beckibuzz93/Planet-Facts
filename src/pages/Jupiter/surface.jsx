import * as Components from '../../Components'
import PlanetJupiter from '../../assets/planet-jupiter.svg';

import JupiterSurfaceImg from '../../assets/geology-jupiter.png';

const JupiterSurface = () => {
    let sentence = `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={JupiterSurfaceImg} altGeoImg='Jupiter geology illustration'/>

            <Components.PageMainTitle pageMainTitle='Jupiter' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

            <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
        </>
    )
}

export default JupiterSurface

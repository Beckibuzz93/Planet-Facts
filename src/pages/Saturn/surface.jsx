import * as Components from '../../Components'
import PlanetSaturn from '../../assets/planet-saturn.svg'

import SaturnSurfaceImg from '../../assets/geology-saturn.png';

const SaturnSurface = () => {
    let sentence = `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. `
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={SaturnSurfaceImg} altGeoImg='Mercury geology illustration'/>
            <Components.PageMainTitle pageMainTitle='Saturn' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

            <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
        </>
    )
}

export default SaturnSurface

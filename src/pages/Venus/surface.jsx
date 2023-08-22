import * as Components from '../../Components'
import PlanetVenus from '../../assets/planet-venus.svg'

import VenusSurfaceImg from '../../assets/geology-venus.png';

const VenusSurface = () => {
    const sentence = `Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={VenusSurfaceImg} altGeoImg='Venus geology illustration'/>
            
            <Components.PageMainTitle pageMainTitle='Venus' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

            <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
        </>
    )
}

export default VenusSurface

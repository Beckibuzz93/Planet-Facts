import * as Components from '../../Components'
import PlanetUranus from '../../assets/planet-uranus.svg'

import UranusSurfaceImg from '../../assets/geology-uranus.png';

const UranusSurface = () => {
    let sentence = `The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={UranusSurfaceImg} altGeoImg='Uranus geology illustration'/>
            <Components.PageMainTitle pageMainTitle='Uranus' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

            <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
        </>
    )
}

export default UranusSurface

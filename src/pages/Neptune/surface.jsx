import * as Components from '../../Components'
import PlanetNeptune from '../../assets/planet-neptune.svg'

import NeptuneSurfaceImg from '../../assets/geology-neptune.png';

const NeptuneSurface = () => {
    let sentence = `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={NeptuneSurfaceImg} altGeoImg='Mercury geology illustration'/>

            <Components.PageMainTitle pageMainTitle='Neptune' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>

            <Components.PageMainInfo rotationTime='16.08 hours' revolutionTime='164.79 years' radius='24.622 km' avgTemp='-201°C'/>
        </>
    )
}

export default NeptuneSurface

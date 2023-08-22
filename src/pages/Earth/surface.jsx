import * as Components from '../../Components'
import PlanetEarth from '../../assets/planet-earth.svg';
import EarthSurfaceImg from '../../assets/geology-earth.png';

const EarthSurface = () => {
    const sentence = `The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
            <Components.GeologyImg geologyImageClass='geo-img' geologyImg={EarthSurfaceImg} altGeoImg='Mercury geology illustration'/>

            <Components.PageMainTitle pageMainTitle='Earth'/>

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>

            <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
        </>
    )
}

export default EarthSurface

import * as Components from '../../Components'
import PlanetEarth from '../../assets/planet-earth-internal.svg';

const EarthStructure = () => {
    const sentence = `Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>

            <Components.PageMainTitle pageMainTitle='Earth'/>

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>

            <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
        </>
    )
}

export default EarthStructure

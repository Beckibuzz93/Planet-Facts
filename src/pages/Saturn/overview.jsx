import * as Components from '../../Components'
import PlanetSaturn from '../../assets/planet-saturn.svg'

const SaturnOverview = () => {
    let sentence = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>

            <Components.PageMainTitle pageMainTitle='Saturn' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

            <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
        </>
    )
}

export default SaturnOverview

import * as Components from '../../Components'
import PlanetNeptune from '../../assets/planet-neptune.svg'

const NeptuneOverview = () => {
    let sentence = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>

            <Components.PageMainTitle pageMainTitle='Neptune' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>

            <Components.PageMainInfo rotationTime='16.08 hours' revolutionTime='164.79 years' radius='24.622 km' avgTemp='-201°C'/>
        </>
    )
}

export default NeptuneOverview

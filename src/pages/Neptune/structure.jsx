import * as Components from '../../Components'
import PlanetNeptune from '../../assets/planet-neptune-internal.svg'

const NeptuneStructure = () => {
    let sentence = `Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image neptune-img' mainImg={PlanetNeptune} altImg='Neptune illustration'/>

            <Components.PageMainTitle pageMainTitle='Neptune' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Neptune'/>

            <Components.PageMainInfo rotationTime='16.08 hours' revolutionTime='164.79 years' radius='24.622 km' avgTemp='-201°C'/>
        </>
    )
}

export default NeptuneStructure

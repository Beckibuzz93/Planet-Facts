import * as Components from '../../Components'
import PlanetSaturn from '../../assets/planet-saturn-internal.svg'

const SaturnStructure = () => {
    let sentence = `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image saturn-img' mainImg={PlanetSaturn} altImg='Saturn illustration'/>

            <Components.PageMainTitle pageMainTitle='Saturn' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Saturn'/>

            <Components.PageMainInfo rotationTime='10.8 hours' revolutionTime='29.46 years' radius='58,232 km' avgTemp='-138°C'/>
        </>
    )
}

export default SaturnStructure

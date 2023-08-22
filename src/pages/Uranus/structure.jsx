import * as Components from '../../Components'
import PlanetUranus from '../../assets/planet-uranus-internal.svg'

const UranusStructure = () => {
    let sentence = `The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>

            <Components.PageMainTitle pageMainTitle='Uranus' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

            <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
        </>
    )
}

export default UranusStructure

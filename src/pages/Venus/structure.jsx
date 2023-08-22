import * as Components from '../../Components'
import PlanetVenus from '../../assets/planet-venus-internal.svg'

const VenusStructure = () => {
    const sentence = `The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.`
    return(
        <>
           <Components.PageMainImage pageMainImage='page-main-image venus-img' mainImg={PlanetVenus} altImg='Venus illustration'/>

            <Components.PageMainTitle pageMainTitle='Venus' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Venus'/>

            <Components.PageMainInfo rotationTime='243 days' revolutionTime='224.7 days' radius='6,051.8 km' avgTemp='471°C'/>
        </>
    )
}

export default VenusStructure

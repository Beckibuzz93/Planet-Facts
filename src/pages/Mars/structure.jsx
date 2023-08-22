import * as Components from '../../Components'
import PlanetMars from '../../assets/planet-mars-internal.svg'


const MarsStructure = () => {
    let sentence = `Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>

            <Components.PageMainTitle pageMainTitle='Mars'/>

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

            <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
        </>
    )
}

export default MarsStructure

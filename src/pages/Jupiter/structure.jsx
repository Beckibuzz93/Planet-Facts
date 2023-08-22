import * as Components from '../../Components'
import PlanetJupiter from '../../assets/planet-jupiter-internal.svg';

const JupiterStructure = () => {
    let sentence = `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>
            <Components.PageMainTitle pageMainTitle='Jupiter' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

            <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
        </>
    )
}

export default JupiterStructure

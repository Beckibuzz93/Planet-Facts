import * as Components from '../../Components'

import PlanetJupiter from '../../assets/planet-jupiter.svg';

const JupiterOverview = () => {
    let sentence = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image jupiter-img' mainImg={PlanetJupiter} altImg='Jupiter illustration'/>

            <Components.PageMainTitle pageMainTitle='Jupiter' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Jupiter'/>

            <Components.PageMainInfo rotationTime='9.93 hours' revolutionTime='11.86 years' radius='69,911 km' avgTemp='-108°C'/>
        </>
    )
}

export default JupiterOverview

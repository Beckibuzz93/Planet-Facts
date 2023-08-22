import * as Components from '../../Components'

import PlanetMercury from '../../assets/planet-mercury.svg';

const MercuryOverview = () => {
    const sentence = `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`
    return(
        <>

            <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>

            <Components.PageMainTitle pageMainTitle='Mercury' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>
            
            <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>

        </>
    )
}

export default MercuryOverview

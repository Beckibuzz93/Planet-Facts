import * as Components from '../../Components'

import PlanetMercury from '../../assets/planet-mercury-internal.svg';

const MercuryStructure = () => {
    const sentence = `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image mercury-img' mainImg={PlanetMercury} altImg='Mercury illustration'/>

            <Components.PageMainTitle pageMainTitle='Mercury' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mercury_(planet)'/>

            <Components.PageMainInfo rotationTime='58.6 days' revolutionTime='87.97 days' radius='2,439.7 km' avgTemp='430°C'/>
        </>
    )
}

export default MercuryStructure

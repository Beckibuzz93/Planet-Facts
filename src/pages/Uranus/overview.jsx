import * as Components from '../../Components'
import PlanetUranus from '../../assets/planet-uranus.svg'

const UranusOverview = () => {
    let sentence = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`
    return(
        <>
            <Components.PageMainImage pageMainImage='page-main-image uranus-img' mainImg={PlanetUranus} altImg='Uranus illustration'/>

            <Components.PageMainTitle pageMainTitle='Uranus' />

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Uranus'/>

            <Components.PageMainInfo rotationTime='17.2 hours' revolutionTime='84 years' radius='25,362 km' avgTemp='-195°C'/>
        </>
    )
}

export default UranusOverview

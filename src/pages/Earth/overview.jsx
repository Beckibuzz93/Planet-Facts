import * as Components from '../../Components'

import PlanetEarth from '../../assets/planet-earth.svg';
const EarthOverview = () => {
    const sentence = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`
    return (
      <>

        <Components.PageMainImage pageMainImage='page-main-image earth-img' mainImg={PlanetEarth} altImg='Earth illustration'/>
        <Components.PageMainTitle pageMainTitle='Earth'/>
        <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Earth'/>
        <Components.PageMainInfo rotationTime='0.99 days' revolutionTime='365.26 days' radius='6,371 km' avgTemp='16°C'/>
        
      </>
    )
}

export default EarthOverview

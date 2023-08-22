import * as Components from '../../Components'
import PlanetMars from '../../assets/planet-mars.svg'

const MarsOverview = () => {
    let sentence = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`
    return(
        <>
           <Components.PageMainImage pageMainImage='page-main-image mars-img' mainImg={PlanetMars} altImg='Mars illustration'/>

            <Components.PageMainTitle pageMainTitle='Mars'/>

            <Components.PageMainStatement pageMainStatement={sentence} wikiLink='https://en.wikipedia.org/wiki/Mars'/>

            <Components.PageMainInfo rotationTime='1.03 days' revolutionTime='1.88 years' radius='3,389 km' avgTemp='-28°C'/>
        </>
    )
}

export default MarsOverview

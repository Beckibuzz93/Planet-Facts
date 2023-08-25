import { Routes, Route } from 'react-router-dom'

import * as Components from './components'

import * as Pages from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Components.NavBar/>}>
        
        <Route index element={<Pages.LandingPage/>}></Route>

        <Route path = "*" element={<Pages.PageNotFound/>}></Route>

        <Route path='/earth' element={<Components.EarthNav/>}>
          <Route index element={<Pages.EarthOverview/>}/>
          <Route path='structure' element={<Pages.EarthStructure/>} />
          <Route path='surface'  element={<Pages.EarthSurface/>} />
        </Route>

        <Route path='/jupiter' element={<Components.JupiterNav/>}>
          <Route index element={<Pages.JupiterOverview/>}/>
          <Route path='structure' element={<Pages.JupiterStructure/>} />
          <Route path='surface'  element={<Pages.JupiterSurface/>} />
        </Route>

        <Route path='/mars' element={<Components.MarsNav/>}>
          <Route index element={<Pages.MarsOverview/>}/>
          <Route path='structure' element={<Pages.MarsStructure/>} />
          <Route path='surface'  element={<Pages.MarsSurface/>} />
        </Route>

        <Route path='/mercury' element={<Components.MercuryNav/>}>
          <Route index element={<Pages.MercuryOverview/>}/>
          <Route path='structure' element={<Pages.MercuryStructure/>} />
          <Route path='surface'  element={<Pages.MercurySurface/>} />
        </Route>

        <Route path='/neptune' element={<Components.NeptuneNav/>}>
          <Route index element={<Pages.NeptuneOverview/>}/>
          <Route path='structure' element={<Pages.NeptuneStructure/>} />
          <Route path='surface'  element={<Pages.NeptuneSurface/>} />
        </Route>

        <Route path='/saturn' element={<Components.SaturnNav/>}>
          <Route index element={<Pages.SaturnOverview/>}/>
          <Route path='structure' element={<Pages.SaturnStructure/>} />
          <Route path='surface'  element={<Pages.SaturnSurface/>} />
        </Route>

        <Route path='/uranus' element={<Components.UranusNav/>}>
          <Route index element={<Pages.UranusOverview/>}/>
          <Route path='structure' element={<Pages.UranusStructure/>} />
          <Route path='surface'  element={<Pages.UranusSurface/>} />
        </Route>

        <Route path='/venus' element={<Components.VenusNav/>}>
          <Route index element={<Pages.VenusOverview/>}/>
          <Route path='structure' element={<Pages.VenusStructure/>} />
          <Route path='surface'  element={<Pages.VenusSurface/>} />
        </Route>

      </Route>
    </Routes>
    </>
  )
}

export default App


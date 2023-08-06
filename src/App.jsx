import { Routes, Route } from 'react-router-dom'

import { NavBar } from './components'

import * as Pages from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        
        <Route index element={<Pages.LandingPage/>}></Route>

        <Route path = "*" element={<Pages.PageNotFound/>}></Route>

        <Route path="/Mercury/*" element={<Pages.Mercury/>}></Route>
        <Route path='/MercuryStructure' element={<Pages.MercuryStructure />}></Route>
        <Route path='/MercurySurface' element={<Pages.MercurySurface />}></Route>

        <Route path="/Earth/*" element={<Pages.Earth/>}></Route>
        <Route path='/EarthStructure' element={<Pages.EarthStructure />}></Route>
        <Route path='/EarthSurface' element={<Pages.EarthSurface />}></Route>

        <Route path="/Jupiter/*" element={<Pages.Jupiter/>}></Route>
        <Route path='/JupiterStructure' element={<Pages.JupiterStructure />}></Route>
        <Route path='/JupiterSurface' element={<Pages.JupiterSurface />}></Route>

        <Route path="/Mars/*" element={<Pages.Mars/>}></Route>
        <Route path='/MarsStructure' element={<Pages.MarsStructure />}></Route>
        <Route path='/MarsSurface' element={<Pages.MarsSurface />}></Route>

        <Route path="/Neptune/*" element={<Pages.Neptune/>}></Route>
        <Route path='/NeptuneStructure' element={<Pages.NeptuneStructure />}></Route>
        <Route path='/NeptuneSurface' element={<Pages.NeptuneSurface />}></Route>

        <Route path="/Saturn/*" element={<Pages.Saturn/>}></Route>
        <Route path='/SaturnStructure' element={<Pages.SaturnStructure />}></Route>
        <Route path='/SaturnSurface' element={<Pages.SaturnSurface />}></Route>

        <Route path="/Uranus/*" element={<Pages.Uranus/>}></Route>
        <Route path='/UranusStructure' element={<Pages.UranusStructure />}></Route>
        <Route path='/UranusSurface' element={<Pages.UranusSurface />}></Route>

        <Route path="/Venus/*" element={<Pages.Venus/>}></Route>
        <Route path='/VenusStructure' element={<Pages.VenusStructure />}></Route>
        <Route path='/VenusSurface' element={<Pages.VenusSurface />}></Route>

      </Route>
    </Routes>
    </>
  )
}

export default App


import { Routes, Route } from 'react-router-dom'

import { NavBar } from './components'

import * as Pages from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Pages.LandingPage/>}></Route>

        <Route path="/Mercury/*" element={<Pages.Mercury/>}></Route>
        <Route path='/MercuryStructure' element={<Pages.MercuryStructure />}></Route>
        <Route path='/MercurySurface' element={<Pages.MercurySurface />}></Route>

        <Route path="/Venus/*" element={<Pages.Venus/>}></Route>
        <Route path="/Earth/*" element={<Pages.Earth/>}></Route>
        <Route path="/Mars/*" element={<Pages.Mars/>}></Route>
        <Route path="/Jupiter/*" element={<Pages.Jupiter/>}></Route>
        <Route path="/Saturn/*" element={<Pages.Saturn/>}></Route>
        <Route path="/Uranus/*" element={<Pages.Uranus/>}></Route>
        <Route path="/Neptune/*" element={<Pages.Neptune/>}></Route>
        <Route path = "*" element={<Pages.PageNotFound/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App


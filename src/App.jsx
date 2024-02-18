import './App.css'
import './reset.css'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Destinations from './pages/Destinations/Destinations'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destinations' element={<Destinations />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App

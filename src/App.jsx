import { Routes, Route } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
// import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Products from './pages/Products'
import Bfm from './pages/Bfm'
import Jacob from './pages/Jacob'
import Solimar from './pages/Solimar'
import Morris from './pages/Morris'
import Eclipse from './pages/Eclipse'
import Services from './pages/Services'
import Sterivalves from './pages/Sterivalves'
import "./styles/nav.css"
import "./styles/footer.css"
import './App.css'
import { Suspense, lazy } from 'react'
const About = lazy(() => import('./pages/About'))

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Suspense><About /></Suspense>} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='services' element={<Services />} />
          <Route path='products' element={<Products />} >
            <Route path='bfm' element={<Bfm />} />
            <Route path='jacob' element={<Jacob />} />
            <Route path='solimar-fluidizers' element={<Solimar />} />
            <Route path='morris-coupling' element={<Morris />} />
            <Route path='eclipse-magnetics' element={<Eclipse />} />
            <Route path='sterivalves' element={<Sterivalves />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

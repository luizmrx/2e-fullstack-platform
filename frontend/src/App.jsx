import { useState, useEffect } from 'react'
import Header from './componentes/Header'
import './Reset.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Seguranca from './pages/Seguranca'
import NaoEncontrada from './pages/NaoEncontrada'
import Faq from './pages/Faq'
import Artigos from './pages/Artigos'
import ArtigoDetalhe from './pages/Artigo'
import ScrollToTop from './componentes/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes key={window.location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/seguranca' element={<Seguranca />} />
          <Route path='/faq'element={<Faq />} />
          <Route path='/artigos' element={<Artigos />} />
          <Route path='/artigo/:id' element={<ArtigoDetalhe />} />    
          <Route path='*' element={<NaoEncontrada />}/>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

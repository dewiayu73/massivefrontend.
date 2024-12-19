import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Feature from './pages/Feature'
import About from './pages/About'
import Blog from './pages/Blog'
import Panduan from './pages/Panduan'
import Footer from './components/Footer1'
import Home4 from './components/Home4'
import FiturCamera from './components/FiturCamera'


const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feature' element={<Feature />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/panduan' element={<Panduan />} />
      <Route path='/Home4' element={<Home4 />} />
      <Route path='/FiturCamera' element={<FiturCamera />} />
   </Routes>
   </div>
   <Footer />
   </BrowserRouter>
  )
}

export default App
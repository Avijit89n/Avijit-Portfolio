import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Projects from './Components/pages/Projects'
import Profile from './Components/layout/Profile.Layout'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Profile />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App

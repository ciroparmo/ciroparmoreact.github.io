import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {

  const tituloNavbar = 'Dripter'

  return (
    <>
     <Navbar titulo={tituloNavbar}/>
    </>
  )
}

export default App

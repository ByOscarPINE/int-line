import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import ListH from './pages/ListH.jsx'
import ListP from './pages/ListP.jsx'
import Res_1 from './pages/Res_1.jsx'
import Res_2 from './pages/Res_2.jsx'
import Diagnostic from './pages/Diagnostic.jsx'
import CreateP from './pages/CreateP.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/ListH' element={<ListH/>} />
        <Route path='/ListP' element={<ListP/>} />
        <Route path='/Res_1' element={<Res_1/>} />
        <Route path='/Res_2' element={<Res_2/>} />
        <Route path='/Diagnostic' element={<Diagnostic/>} />
        <Route path='/CreateP' element={<CreateP/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import ListH from './pages/ListH.jsx'
import ListP from './pages/ListP.jsx'
import Res_1 from './pages/Res_1.jsx'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

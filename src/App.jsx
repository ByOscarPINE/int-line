import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';
import ListH from './pages/ListH.jsx'
import ListP from './pages/ListP.jsx'
import Res_1 from './pages/Res_1.jsx'
import Res_2 from './pages/Res_2.jsx'
import Diagnostic from './pages/Diagnostic.jsx'
import CreateP from './pages/CreateP.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'
import ProtectedRoutes from './pages/ProtectedRoutes.jsx'

function App() {

  return (
    <TaskContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/ListH' element={<ProtectedRoutes><ListH/></ProtectedRoutes>} />
        <Route path='/CreateP' element={<ProtectedRoutes><CreateP/></ProtectedRoutes>} />
        <Route path='/ListP/:id' element={<ProtectedRoutes><ListP/></ProtectedRoutes>} />
        <Route path='/ListP/:id/:idd' element={<ProtectedRoutes><Res_1/></ProtectedRoutes>} />
        <Route path='/ListP/:id/Result' element={<ProtectedRoutes><Res_1/></ProtectedRoutes>} />
        <Route path='/ListH/:id/Res_2' element={<ProtectedRoutes><Res_2/></ProtectedRoutes>} />
        <Route path='/ListP/:id/Diagnostic' element={<ProtectedRoutes><Diagnostic/></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
    </TaskContextProvider>
  )
}

export default App

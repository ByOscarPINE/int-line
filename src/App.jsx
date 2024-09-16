import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'

function App() {

  return (
    <TaskContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </TaskContextProvider>
  )
}

export default App

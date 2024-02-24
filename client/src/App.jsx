import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Logout from "./components/Logout"
import AddComplaint from './pages/AddComplaint'
import Login from './components/Login'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/addcomp' element={<AddComplaint/>}/>
        <Route path='/' element={<Logout/>}/> 
      </Routes>
    </div>
  )
}

export default App
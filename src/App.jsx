import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        
      
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path='/Login' element={<LoginPage/>}/>



      </Routes>
    </BrowserRouter>
  
    </div>

    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import ItemPage from './pages/ItemPage'; 
import CategorySearch from './pages/CategorySearch';
import ProfilePage from './pages/ProfilePage';
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        
      
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path="/Post" element={<PostPage/>}/>
      <Route path="/item/:id" element={<ItemPage />} /> 
      <Route path="/members/:id" element={<ProfilePage />} />
      <Route path="/category/*" element={<CategorySearch/>} />


      </Routes>
    </BrowserRouter>
  
    </div>

    </>
  )
}

export default App

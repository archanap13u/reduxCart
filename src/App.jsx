import { useState } from 'react'
import './bootstrap.min.css'

import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wish from './pages/Wish'
import { Routes,Route } from 'react-router-dom'
import Header from'./components/Header'

import './App.css'

function App() {
 
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id'element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish'element={<Wish/>}/>
     </Routes>
          
    </>
  )
}

export default App

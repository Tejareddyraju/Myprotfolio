import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Product from './Components/Product/Product'
import Contact from './Components/Education/Education'
import About from './Components/Contact/Contact'
import Navbar from './Navbar/Navbar';



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

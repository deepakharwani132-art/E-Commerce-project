import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { Button, Flex } from 'antd';
import Nav from './components/Nav';
// import Header from './components/Header';
import Home from './components/Home';
import Cat from './components/Cat';
import Footer from './components/Footer';
import Routex from './routex';
import Frag from './components/frag';
import Shalwar from './components/shalwar';
import Skin from './components/Skin';
import Kurta from './components/kurta';
import Product from './components/product';
import { CartProvider } from './components/CartContext';










function App() {
  

  return (

    <>
<Nav />
<CartProvider>
<Router>
      <Routes>

      <Route path="/" element={<Routex />}  />
        <Route path="/home" element={<Home />}  />
        <Route path="/Category" element={<Cat />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/frag/:slug" element={<Frag />} />
    <Route path="/Shalwar/:slug" element={<Shalwar />} />
    <Route path="/Skin/:slug" element={<Skin />} />
    <Route path="/Kurta/:slug" element={<Kurta />} />
    <Route path="/product/:id" element={<Product />} />
      </Routes>
     </Router>
</CartProvider>
     
   {/* <Nav /> 
   
     <Home /> 
   {/* <HomeAi /> */}
    {/* <Cat /> 
      <Footer />  */} */

    </>
  )
}

export default App

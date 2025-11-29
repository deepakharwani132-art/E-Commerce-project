// import { useState } from 'react'
// import './App.css'
// import './App.css'
import { useState } from 'react';
import './web.css'
import { Button, Flex } from 'antd';
import { BrowserRouter, Link } from 'react-router-dom';



function Nav() {
 

  return (
    <>
    <div className ='Navbar'>
      
  <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6__hYe1d-qI5HsX8R6Em19507iCprSxvRQ&s' />

  <nav className="searchlist navbar ">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>


 <ul className='nav'>
 <BrowserRouter>
  <li className ='nav-btn' >
    <Link to='/home'> Home</Link>
  </li>

  <li  className ='nav-btn'>
    <Link to='/footer'> About</Link>
  </li>

  <li className ='nav-btn'>
  <Link to='/category'> Category</Link>
  </li>
  </BrowserRouter>
 </ul>


</div>


    </>
  )
}

export default Nav
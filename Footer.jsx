import React from 'react'

const Footer = () => {
  return (
<>
    <hr />
    <div className='signup'>
   <h3>BE THE FIRST</h3>
   <p>New arrivals. Exclusive previews.
     First access to sales. 
     Sign up to stay in the know.</p>
     <div className='sign'>
   <input className="form-control me-2" type="search" placeholder="Enter your E-mail" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Sign Up</button>
      </div>
    </div>

    <hr />

    <footer>
    <h2>Don't forget to Follow me Here! ....</h2> 
    <div class="social">
        <i class="fa-brands fa-square-instagram media"></i>
        <i class="fa-brands fa-linkedin media"></i>
        <i class="fa-brands fa-github media"></i>
    </div>

    <div className='con'>
        <h3>Contact us : Deepakharwani37@gmail.com</h3>
    </div>
</footer>
</>
  )
}

export default Footer
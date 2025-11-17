import React from 'react'
import './Navbar.css'
import sitelogo from '../../../../public/img/Al.png'
const Navbar = () => {
  return (
    <div className="nav-top">
        <div class="brand">
            <img className='logo' src={sitelogo} alt="" />
            <div>
                <strong>Al-Hikmah Mohila Hafz Khana</strong><br/>
                <small>3 No. Road, Mozaffer Nagor, Khulshi, CTG</small>
            </div>
        </div>
        <nav>
            <a href="#home">Home</a>
            <a href="#admission">Admission</a>
            <a href="#results">Results</a>
            <a href="#notice">Notice</a>
            <a href="#payment">Payment</a>
            <a href="#contact">Contact</a>
        </nav>
        <div>
            <button className='btn btn-primary'>Student LogIn</button>
        </div>
        
      
    </div>
  )
}

export default Navbar

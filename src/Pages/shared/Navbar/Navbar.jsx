import './Navbar.css'
import sitelogo from '../../../../public/img/Al.png'
import { NavLink } from 'react-router'
import { useState } from 'react'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navItems = <>
    <a><NavLink to="/">Home</NavLink></a>
    <a><NavLink to="/admission">Admission</NavLink></a>
    <a><NavLink to="/results">Results</NavLink></a>
    <a><NavLink to="/notice">Notice</NavLink></a>
    <a><NavLink to="/payment">Payment</NavLink></a>
    <a><NavLink to="/contact">Contact</NavLink></a>
    
    </>
  return (
    <div className="nav-top">
        <div class="brand">
            <img className='logo' src={sitelogo} alt="" />
            <div>
                <strong>Al-Hikmah Mohila Hafz Khana</strong><br/>
                <small>3 No. Road, Mozaffer Nagor, Khulshi, CTG</small>
            </div>
        </div>
        <nav className='hidden md:flex items-center gap-5 text[16px font-mono]'>
           {navItems}
        </nav>
        <div>
            <button className='btn btn-primary'> <NavLink to="/login"> Student LogIn </NavLink></button>
        </div>

        <button className='md:hidden text-2xl'
        onClick={() => setOpen(!open)}
        >{open ? "X" : "☰"}</button>

        {
            open && <nav className='md:hidden flex flex-col items-center gap-3 py-3 bg-cyan-100 '>{navItems}</nav>
        }
        
      
    </div>
  )
}

export default Navbar

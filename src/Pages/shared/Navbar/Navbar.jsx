import './Navbar.css'
import sitelogo from '../../../../public/img/Al.png'
import { NavLink } from 'react-router'
const Navbar = () => {
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
        <nav>
           {navItems}
        </nav>
        <div>
            <button className='btn btn-primary'> <NavLink to="/login"> Student LogIn </NavLink></button>
        </div>
        
      
    </div>
  )
}

export default Navbar

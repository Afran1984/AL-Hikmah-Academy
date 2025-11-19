import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Pages/shared/Navbar/Navbar';
import Footer from '../Pages/shared/Footer/Footer';
const rootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  )
}

export default rootLayouts

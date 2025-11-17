import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../Pages/shared/Navbar/Navbar';
const rootLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default rootLayouts

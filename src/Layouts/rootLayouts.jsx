import React from 'react'
import { Outlet } from 'react-router';
const rootLayouts = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default rootLayouts

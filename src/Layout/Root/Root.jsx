import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='font-display border border-red-700 w-11/12 mx-auto'>
      <Outlet></Outlet>
    </div>
  )
}

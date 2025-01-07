import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className='font-display  w-11/12 mx-auto'>
      <Outlet></Outlet>
    </div>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='min-h-screen grid place-content-center'>
      <div className='grid gap-4'>
        <h2 className='text-center font-extrabold text-4xl'>404 Not found</h2>
        <p>This page is under development. We appreciate for your patience. Go <NavLink className="text-sky-400"to="/">Home</NavLink></p>
      </div>
    </div>
  )
}

export default NotFound

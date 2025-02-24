import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='flex items-center justify-between p-3 colorblue text-gray-300  sticky top-0'>
        <NavLink className="hover:text-amber-700 text-lg" to="/">Home</NavLink>
        <div className='flex items-start justify-end gap-4 font-mono'>
            <NavLink className="hover:text-amber-700" to="/course/cats/pending">CAT/s</NavLink>
            <NavLink className="hover:text-amber-700" to="/course/assignments/pending">ASSGN/s</NavLink>
        </div>
  </nav>
  )
}

export default Nav

import React from 'react'
import { MdOutlineMenu as Menu } from 'react-icons/md'
import { BiSearch as Search } from 'react-icons/bi'
import { BsPersonFill as Profile } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const SmallNav = () => {
  return (
    <div className='hidden sm:flex text-white justify-between  mb-5'>
        <div>  
            <h1 className='text-xl font-bold'>BTME</h1>
        </div>
        <nav>
            <ul className='flex items-start justify-start gap-3'>
                <li className='hover:text-amber-700 transition-color duration-100 ease-linear'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li  className='hover:text-amber-700 transition-color duration-100 ease-linear'>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li  className='hover:text-amber-700 transition-color duration-100 ease-linear'>
                    <NavLink to="/solve">Solving</NavLink>
                </li>
            </ul>
        </nav>
        <div className='flex justify-end items-center gap-3'>
            <button className='hover:text-amber-700 transition-color duration-100 ease-linear'><Search size={20}/></button>
            <Profile className='hover:text-amber-700 transition-color duration-100 ease-linear' size={20}/>
        </div>
    </div>
  )
}

export default SmallNav

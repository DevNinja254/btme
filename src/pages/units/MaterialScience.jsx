import React from 'react'
import outline2 from "../../assets/images/matscie2/outline1.jpeg"
import outline1 from "../../assets/images/matscie2/outline2.jpeg"
import { NavLink } from 'react-router-dom'
import { BiDownload as Download } from 'react-icons/bi'
const MaterialScience = () => {
  return (
    <div>
      <nav className='flex items-center justify-between p-3 colorblue text-gray-300  sticky top-0'>
        <NavLink className="hover:text-amber-700 text-lg" to="/">Home</NavLink>
        <div className='flex items-start justify-end gap-4 font-mono'>
            <NavLink className="hover:text-amber-700" to="/course/cats">CAT/s</NavLink>
            <NavLink className="hover:text-amber-700" to="/course/assign">ASSGN/s</NavLink>
        </div>
      </nav>
      <div>
        <h2 className='my-4 text-xl font-bold text-center'>Course Outline</h2>
        <div className='sm:w-5/6 m-auto rounded-md overflow-hidden lg:w-4/5 xl:w-3/4 2xl:2/3 '>
            <div className='imgContainer'>
                <figure>
                <img src={outline1} alt="" className='rounded-md' />
                <figcaption className='flex items-center justify-between mx-3 mb-3 text-sm font-mono'>Courtesy of BTME2023 GROUP <a href={outline1} download><Download className='text-sky-600' size={30}/></a></figcaption>
                </figure>
                
            </div>
            <div className='imgContainer'>
            <figure>
                <img src={outline2} alt="" className='rounded-md' />
                <figcaption className='flex items-center justify-between mx-3 mb-3 text-sm font-mono'>Courtesy of BTME2023 GROUP <a href={outline2} download><Download className='text-sky-600' size={30}/></a></figcaption>
                </figure>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialScience

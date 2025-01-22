import React from 'react';
import NavLarge from "./NavLarge";
import {FaGraduationCap} from "react-icons/fa6";
import { AiFillTwitterCircle as Twitter} from "react-icons/ai";
import { HiOutlineMailOpen as Email} from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube as Youtube} from "react-icons/fa";
import { FiPhoneCall as Call} from "react-icons/fi";
const LargeScreen = ({zIndex}) => {
  // zIndex("z-10")
  return (
  <div className='sticky top-0 bg-white z-30 bg-opacity-15 backdrop-blur-sm hidden md:block'>
    <div className="hidden md:flex items-start justify-start">
      <nav className='colorblue flex items-center justify-start gap-3 px-3 py-2'>
          {/* facebook */}
          <a className='text-white hover:text-sky-200' href="https://facebook.com" target='
          _blank'><FaFacebook size={20}/></a>
          <a className='text-white hover:text-sky-200' href="https://twitter.com" target='
          _blank'><Twitter size={20}/></a>
          <a className='text-white hover:text-sky-200' href="https://youtube.com" target='
          _blank'><Youtube size={20}/></a>
      </nav>
      <div className='w-full flex items-center justify-between gap-3 px-3 py-2 bg-amber-700 text-white'>
        <div className='flex items-start justify-between gap-4 text-sm'>
          <p className='flex items-center justify-start gap-2'><Call size={20}/><span>+254733955377</span></p>
          <p className='flex items-center justify-start gap-2'><Email size={20}/> <span>info@tum.ac.ke</span></p>
        </div>
        <ul className='flex items-center justify-end gap-1 text-sm font-mono'>
          <li><a className='hover:text-sky-300 text-gray-200 transition-colors duration-150 ease-linear' href="/">CALENDAR</a></li>
          <li><a className='hover:text-sky-300 text-gray-200 transition-colors duration-150 ease-linear' href="/">EVENTS</a></li>
          <li><a className='hover:text-sky-300 text-gray-200 transition-colors duration-150 ease-linear' href="/">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <div className='my-4 pl-3 flex items-center justify-between shadow-sm shadow-gray-400'>
        <div className='bg-blue font-bold text-xl'>
          <div className='grid place-content-center'>
            <FaGraduationCap size={40} />
          </div>
          <p>BTME2023</p>
        </div>
        <NavLarge zIndex={zIndex}/>
    </div>
  </div> 
  )
}

export default LargeScreen;
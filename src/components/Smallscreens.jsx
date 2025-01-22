import React from 'react'
import NavSmall from "./NavSmall";
import {FaGraduationCap} from "react-icons/fa6";
import { AiFillTwitterCircle as Twitter} from "react-icons/ai";
import { HiOutlineMailOpen as Email} from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube as Youtube} from "react-icons/fa";
import { FiPhoneCall as Call} from "react-icons/fi";
import { MdOutlineMenuOpen } from "react-icons/md";

const Smallscreens = () => {
  // console.log(props.widt, "hello")
  // const prop = props.widt
  return (
    // brown part of tume website
    <div className="md:hidden static text-">
     <NavSmall/>
      <div className="colorblue text-white py-3">
       {/* tum links */}
        <ul className='text-center'>
                <li className='text-sky-200 py-1 font-mono tracking-wider hover:text-white transition-all duration-150 ease-linear '><a href="https://library.tum.ac.ke">Library Services</a></li>
                <li className='text-sky-200 py-1 font-mono tracking-wider hover:text-white transition-all duration-150 ease-linear '><a href="https://journals.tum.ac.ke">TUM Journals</a></li>
                <li className='text-sky-200 py-1 font-mono tracking-wider hover:text-white transition-all duration-150 ease-linear '><a href="livestream">Live Tv</a></li>
        </ul> 
        {/* tum social media handles */}
        <div>
            <nav className='flex items-center justify-center gap-4 py-3'>
                {/* facebook */}
              <a href="https://facebook.com" target='
              _blank'><FaFacebook className="text-2xl"/></a>
              <a href="https://twitter.com" target='_blank'><Twitter className="text-2xl"/></a>
              <a href="https://youtube.com" target='
              _blank'><Youtube className="text-2xl"/></a>
            </nav>
        </div>
      </div>
      {/* header contact and tum Icon */}
      <div className="py-5">
        {/* tum icon */}
        <figure className='grid place-content-center pb-3'>
          <img src="https://www.tum.ac.ke/resources/public/logo.png" alt="tume icon" className='block'/>
        </figure>
        <div className="text-center py-4 font-serif">
          {/* call number */}
          <div className='grid place-content-center pb-2'>
            <Call className='text-2xl'/>
          </div>
          <p>Call us at</p>
          <p>+254733955377</p>
        </div>
        <div className="text-center py-4 font-serif">
          {/* email */}
          <div className='grid place-content-center pb-2'>
            <Email className='text-2xl'/>
          </div>
          
          <p>Email us</p>
          <p>info@tum.ac.ke</p>
        </div>
        {/* physical address */}
        <div className="text-center py-4 font-serif">
          <p>Physical Address</p>
          <p>Tom Mboya Street Tudor, Msa</p>
        </div>
      </div>
    </div>
  )
}

export default Smallscreens
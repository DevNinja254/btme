import React from 'react'
import NavSmall from "./Nav";
import {FaGraduationCap} from "react-icons/fa6";
import { AiFillTwitterCircle as Twitter} from "react-icons/ai";
import { HiOutlineMailOpen as Email} from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube as Youtube} from "react-icons/fa";
import { FiPhoneCall as Call} from "react-icons/fi";
import { MdOutlineMenuOpen } from "react-icons/md";

const Smallscreens = () => {
  return (
    // brown part of tume website
    <div>
      <div>
        {/* Expands navbar button */}
        <div>
          <div>
            <FaGraduationCap/>
            <p>BTME</p>
          </div>
          <MdOutlineMenuOpen/>
        </div>
        <NavSmall/>
      </div>
      <div>
       {/* tum links */}
        <ul>
                <li><a href="https://library.tum.ac.ke">Library Services</a></li>
                <li><a href="https://journals.tum.ac.ke">TUM Journals</a></li>
                <li><a href="livestream">Live Tv</a></li>
        </ul> 
        {/* tum social media handles */}
        <div>
            <nav>
                {/* facebook */}
              <a href="https://facebook.com" target='
              _blank'><FaFacebook/></a>
              <a href="https://twitter.com" target='
              _blank'><Twitter/></a>
              <a href="https://youtube.com" target='
              _blank'><Youtube/></a>
            </nav>
        </div>
      </div>
      {/* header contact and tum Icon */}
      <div>
        {/* tum icon */}
        <figure>
          <img src="https://www.tum.ac.ke/resources/public/logo.png" alt="tume icon" download/>
          <a href="https://www.tum.ac.ke/resources/public/logo.png" download>ds</a>
        </figure>
        <div>
          {/* call number */}
          <Call/>
          <p>Call us at</p>
          <p>+254733955377</p>
        </div>
        <div>
          {/* email */}
          <Email/>
          <p>Email us</p>
          <p>info@tum.ac.ke</p>
        </div>
        {/* physical address */}
        <div>
          <p>Physical Adddress</p>
          <p>Tom Mboya Street Tudor, Msa</p>
        </div>
      </div>
    </div>
  )
}

export default Smallscreens
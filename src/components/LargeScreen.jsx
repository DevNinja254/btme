import React from 'react';
import Nav from "./Nav";
import {FaGraduationCap} from "react-icons/fa6";
import { AiFillTwitterCircle as Twitter} from "react-icons/ai";
import { HiOutlineMailOpen as Email} from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube as Youtube} from "react-icons/fa";
import { FiPhoneCall as Call} from "react-icons/fi";
const LargeScreen = () => {
  return (
  <>
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
      <div>
        <div>
          <p><Call/><span>+254733955377</span></p>
          <p><Email/> <span>info@tum.ac.ke</span></p>
        </div>
        <ul>
          <li><a href="/">CALENDAR</a></li>
          <li><a href="/">EVENTS</a></li>
          <li><a href="/">CONTACT</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div>
        <figure>
        <FaGraduationCap />
          <p>BTME2023</p>
        </figure>
        <Nav/>
      </div>
    </div>
  </> 
  )
}

export default LargeScreen;
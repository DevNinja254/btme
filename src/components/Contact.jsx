import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube as Youtube} from "react-icons/fa";
import { AiFillTwitterCircle as Twitter} from "react-icons/ai";


const Contact = () => {
  return (
    <div className='text-center md:my-2 md:py-2'>
      <h1 className='text-lg font-bold'>Contact Us</h1>
      <div className='mb-3'>
        <div className='mb-3'>
          <p>Tom Mboya Street Tudor, Msa</p>
          <p>P.O BOX 90420-80100 MSA</p>
        </div>
        <div  className='mb-3'>
          <p>Tel: +254733955377</p>
          <p>+254208095368 / +254208095365</p>
        </div>
        <p>Email: info@tum.ac.ke</p>
      </div>
      <div  className='my-3 flex items-center justify-center gap-3'>
        <a className="hover:text-sky-300"  href="https://facebook.com" target='_blank'><FaFacebook size={25}/></a>
        <a className="hover:text-sky-300"  href="https://twitter.com" target='_blank'><Twitter size={25}/></a>
         <a className="hover:text-sky-300"  href="https://youtube.com" target='_blank'><Youtube size={25}/></a>
      </div>
    </div>
  ) 
}

export default Contact

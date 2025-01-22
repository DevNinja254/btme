import React from 'react'
import {useState} from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Qoute = () => {
  let [quote, setQuote] = useState("Loading Todays Quote....");
  let [author, setAuthor] = useState("__");
  let url = `https://dummyjson.com/quotes/${new Date().getDate()}`
  fetch(url).then((response) => {return response.json()}).then((data) => {setQuote(data.quote)
  setAuthor(data.author)}).catch(error => {
    console.warn(error)
  })
  return <div className='mx-2 my-3 lg:w-5/6 lg:m-auto'>
  <div className='grid place-content-center pt-5 mb-4'><FaTwitter className='text-amber-700 font-extrabold' size={40}/></div>
  <div>
    <div>
     	<FaQuoteLeft className='text-amber-700 font-extrabold' size={20}/>
     	<div className='m-5 mx-4 text-center font-sans tracking-wide lg:text-xl'>
       {quote}
      </div>
     	<div className='grid place-content-end'>
        <FaQuoteRight className='text-amber-700 font-extrabold' size={20}/>
      </div>
    </div>
     <div className='flex itemns-center justify-end'>
      <p className='shadow-sm shadow-sky-400 mt-4 p-1 rounded-sm'>@ {author}</p>
     </div>
  </div>
  </div>
}

export default Qoute

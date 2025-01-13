import React from 'react'
import {useState} from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Qoute = () => {
  let [quote, setQuote] = useState("Loading....");
  let [author, setAuthor] = useState(" ");
  const url = "https://dummyjson.com/quotes/1";
  fetch(url).then((response) => {return response.json()}).then((data) => {setQuote(data.quote)
  setAuthor(data.author)})
  return <div>
  <div><FaTwitter/></div>
  <div>
     <div>
     	<FaQuoteLeft/>
     	{quote}
     	<FaQuoteRight/>
     </div>
     <p>{author}</p>
  </div>
  </div>
}

export default Qoute

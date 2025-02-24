import React from 'react'
import { BiDownload as Download } from 'react-icons/bi'
const Pdf = () => {
  return (
    <div className="m-3" id='pdf'>
        <h2>Notes</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <div>
        <a href="https://docs.google.com/document/d/159QlRvcvsEhOjij6jx2PnHAIAYzKPxhG/edit?usp=sharing&ouid=113159521971112991714&rtpof=true&sd=true" target='_blank'>
        <img className='unit' src={require("../../../assets/images/units/statpresent.png")} alt="" />
        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>lec 1 Statisctics presentation</p>      
        </a>
        <a href="https://docs.google.com/document/d/159QlRvcvsEhOjij6jx2PnHAIAYzKPxhG/edit?usp=sharing&ouid=113159521971112991714&rtpof=true&sd=true" target='_blank'>
      <img className='unit' src={require("../../../assets/images/units/probability.png")} alt="" />
      <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>lec 2 Introduction to probability</p>      
      </a>
      <a href="https://docs.google.com/document/d/159QlRvcvsEhOjij6jx2PnHAIAYzKPxhG/edit?usp=sharing&ouid=113159521971112991714&rtpof=true&sd=true" target='_blank'>
      <img src={require("../../../assets/images/units/quet.png")}  className='unit' alt="" />
      <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>lec 2 quetsions Schaum's outline</p>      
      </a>
      </div>
    </div>
    </div>
  )
}

export default Pdf

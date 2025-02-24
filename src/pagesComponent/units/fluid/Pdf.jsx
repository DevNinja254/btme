import React from 'react'
import { BiDownload as Download } from 'react-icons/bi'
const Pdf = () => {
  return (
    <div className="m-3" id='pdf'>
        <h2>Notes</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <div>
        <a href="https://drive.google.com/file/d/1QLfqtdsArj7PZARINhf0jTU4wuQXywql/view?usp=sharing" target='_blank'>
            <img src={require("../../../assets/images/units/boundary.png")}  className='unit' alt="" />
            <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>boundary layer</p>      
        </a>
        <a href="https://drive.google.com/file/d/1RfXM1KrkiLVJFzbHfmWwvyJ08hKUa1l7/view?usp=sharing" target='_blank'>
            <img src={require("../../../assets/images/units/dimensional.png")}  className='unit' alt="" />
            <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>dimensional analysis</p>      
        </a>
        <a href="https://drive.google.com/file/d/13bVlEkKjRM4St-MGoCSf982RnwPtEG4U/view?usp=sharing" target='_blank'>
            <img src={require("../../../assets/images/units/jets.png")}  className='unit' alt="" />
            <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>jets</p>      
        </a>
        <a href="https://drive.google.com/file/d/1w0T5y_WExj2Anfqgw73_gdAiQtdVZ-7g/view?usp=sharing" target='_blank'>
            <img src={require("../../../assets/images/units/waterhummer.png")}  className='unit' alt="" />
            <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>water hummer surge</p>      
        </a>
      </div>
    </div>
    </div>
  )
}

export default Pdf

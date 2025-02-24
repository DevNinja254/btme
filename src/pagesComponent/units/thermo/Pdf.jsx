import React from 'react'
import { BiDownload as Download } from 'react-icons/bi'
const Pdf = () => {
  return (
    <div className="m-3" id='pdf'>
        <h2>Notes</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <div>
        <a href="https://drive.google.com/file/d/1V3AIpbACKkMUoiK96vvkzp6vgOkrjffQ/view?usp=sharing" target='_blank'>
        <img src={require("../../../assets/images/units/thermo.png")}  className='unit' alt="" />
        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>Thermal 1</p>      
        </a>
      </div>
    </div>
    </div>
  )
}

export default Pdf

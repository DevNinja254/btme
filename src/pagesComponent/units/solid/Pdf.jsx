import React from 'react'
import { BiDownload as Download } from 'react-icons/bi'
const Pdf = () => {
  return (
    <div className="m-3" id='pdf'>
        <h2>Notes</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <div>
        <a href="https://drive.google.com/file/d/1MNqTfrouHK3K0vPthG5xDOEAnVQOZzTq/view?usp=sharing"  className="block py-2 border-b-2 border-gray-500 border-opacity-20" target='_blank'>
        <img src={require("../../../assets/images/units/mat1e.png")} className='unit' alt="" />
        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2'>Mechanic of Materials 1E hearns</p>      
        </a>
        <a href="https://drive.google.com/file/d/1XbHHIPFnYCObwfncQYpfIHJEIu_hKLJ_/view?usp=sharing" className="block py-2 border-b-2 border-gray-500 border-opacity-20" target='_blank'>
        <img src={require("../../../assets/images/units/mat2e.png")} className='unit' alt="" />
        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2'>Mechanic of Materials 2 e j hearns</p>      
        </a>
      </div>
    </div>
    </div>
  )
}

export default Pdf

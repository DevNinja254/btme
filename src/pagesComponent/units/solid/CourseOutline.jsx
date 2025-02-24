import React, {useState} from 'react'
import { BiDownload as Download } from 'react-icons/bi'

const CourseOutline = () => {
    const [height, setHeight] = useState("outlin")
    const [view, setView] = useState("View More")
  return (
    <div>
        <h2 className='my-4 text-xl font-bold text-center'>Course Outline</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <a href="https://drive.google.com/file/d/1Qs7k5ZWOHQNSgnh390pzB8J4NWCiq9qe/view?usp=sharing" target='_blank'>
      <img src={require("../../../assets/images/units/solidoutline.png")} alt="" />
      <p className='bg-gray-600 text-gray-100 text-center font-bold py-2'>Course Outline</p>      
      </a>

    </div>
    </div>
  )
}

export default CourseOutline

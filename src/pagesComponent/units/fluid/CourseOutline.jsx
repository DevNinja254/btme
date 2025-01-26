import React, {useState} from 'react'
import { BiDownload as Download } from 'react-icons/bi'

const CourseOutline = () => {
    const [height, setHeight] = useState("outlin")
    const [view, setView] = useState("View More")
  return (
    <div>
        <h2 className='my-4 text-xl font-bold text-center'>Course Outline</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
      <p className='text-center text-lg font-mono capitalize'>No course outline  yet.</p>
    </div>
    </div>
  )
}

export default CourseOutline

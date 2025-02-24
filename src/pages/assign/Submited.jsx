import React from 'react'
import CourseNav from '../../components/CourseNav'
const Submited = () => {
  return (
    <div>
        <CourseNav/>
        <h2 className='my-4 text-xl font-bold text-center'>Submited Assignments</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
            <p className='text-center text-lg font-mono capitalize'>Currently no assignment submited.</p>
        </div>
    </div>
  )
}

export default Submited

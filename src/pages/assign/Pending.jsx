import React from 'react'
import CourseNav from '../../components/CourseNav'
const Pending = () => {
  return (
    <div>
        <CourseNav/>
        <h2 className='my-4 text-xl font-bold text-center'>Pending Assignments</h2>
        <div className=' m-3 shadow-md shadow-gray-600 p-4 rounded-sm'>
            <div>
            <a href="https://drive.google.com/file/d/1A8wkg9PElfkN-ueRKJykgR3wdkOHIvyQ/view?usp=drive_link" target='_blank'>
                        <img src={require("../../assets/images/units/assign1.png")}  className='assign' alt="" />
                        <p className='bg-gray-600 text-gray-100 text-center font-bold py-2 capitalize'>TMC 4222: Mec of Machines</p>      
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Pending

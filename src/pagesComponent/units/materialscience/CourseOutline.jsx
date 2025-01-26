import React, {useState} from 'react'
import outline2 from "/src/assets/images/matscie2/outline1.jpeg"
import outline1 from "/src/assets/images/matscie2/outline2.jpeg"
import { NavLink } from 'react-router-dom'
import { BiDownload as Download } from 'react-icons/bi'

const CourseOutline = () => {
    const [height, setHeight] = useState("outlin")
    const [view, setView] = useState("View More")
  return (
    <div>
        <h2 className='my-4 text-xl font-bold text-center'>Course Outline</h2>
        <div className={`sm:w-5/6 m-auto rounded-md overflow-hidden lg:w-4/5 xl:w-3/4 2xl:2/3 ${height}`}>
            <div className='imgContainer'>
                <figure>
                <img src={outline1} alt="" className='rounded-md' />
                <figcaption className='flex items-center justify-between mx-3 mb-3 text-sm font-mono'>Courtesy of BTME2023 GROUP <a href={outline1} download><Download className='text-sky-600' size={30}/></a></figcaption>
                </figure>
                
            </div>
            <div className='imgContainer'>
            <figure>
                <img src={outline2} alt="" className='rounded-md' />
                <figcaption className='flex items-center justify-between mx-3 mb-3 text-sm font-mono'>Courtesy of BTME2023 GROUP <a href={outline2} download><Download className='text-sky-600' size={30}/></a></figcaption>
                </figure>
            </div>
        </div>
        <span className='block text-right p-3 text-sky-700 font-bold text-lg border-b-2 border-gray-600 border-opacity-30 hover:cursor-pointer' onClick={()=>{
            if (height == "outlin") {
            setHeight("")
            setView("View Less")
            } else {
            setHeight("outlin")
            setView("View More")
            window.scrollTo({top:0, left:0, behavior:"smooth"})
            }
        }}>{view}</span>
    </div>
  )
}

export default CourseOutline

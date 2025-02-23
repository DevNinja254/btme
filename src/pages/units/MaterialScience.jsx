import React, {useState} from 'react'
import Nav from "../../pagesComponent/units/Nav"
import CourseOutline from '../../pagesComponent/units/materialscience/CourseOutline'
import Pdf from '../../pagesComponent/units/materialscience/Pdf'
import Lab from '../../pagesComponent/units/materialscience/Lab'
const MaterialScience = () => {
  const [labDiplay, setLabDisplay] = useState("hidden")
  const [notesDisplay, setNotesDisplay] = useState("block")
  const [text, setText] = useState("Lab")

  return (
    <div>
      <Nav/>
      <div className='flex items-center justify-end p-3'>
        <span className='text-white bg-sky-600 font-bold text-lg px-2 py-1 tracking-wider rounded-md hover:cursor-pointer' onClick={()=> {
          if (text == "Lab") {
            setLabDisplay("block")
            setNotesDisplay("hidden")
            setText("PDF/s")
          } else {
            setLabDisplay("hidden")
            setNotesDisplay("block")
            setText("Lab")
          }
        }}>{text}</span>
      </div>
      <div className={`${notesDisplay}`}>
        <div className='sm:grid grid-cols-2 gap-4 lg:grid-cols-3'>
         <span className='lg:col-span-2'>
          <CourseOutline />
         </span>
          <Pdf/>
        </div>
      </div>
      <div className={`${labDiplay}`}>
        <Lab/>
      </div>
      <span className='capitalize fixed bottom-10 left-3 text-sm bg-gray-600 rounded-full p-1 text-white bg-opacity-80 hover:cursor-pointer' onClick={()=> {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
      }}>
        top
      </span>
    </div>
  )
}

export default MaterialScience

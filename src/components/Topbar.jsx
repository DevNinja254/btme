import React, {useState} from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";

const Topbar = ({dis}) => {
    const [disply, setDisplay] = useState("flex")
  return (
    <div class={`${disply} items-center justify-between gap-5  p-3 sticky top-0 right-0 w-full text-4xl bg-white`}> 
        <div className="bgblue flex items-center justify-start gap-2 flex-wrap font-mono">
            <FaGraduationCap className=""/>
            <p className='text-3xl'>BTME</p>
        </div>
        <MdOutlineMenuOpen className="bgblue" onClick={()=> {
        setDisplay("hidden")
        dis("w-full")
        }}/>
    </div>
  )
}

export default Topbar

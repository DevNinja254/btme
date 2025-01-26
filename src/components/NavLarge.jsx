import React, {useState} from 'react'
import { IoIosArrowDown as Dropdown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const NavLarge = ({zIndex}) => {
    const reduced = "hidden"
    const expand = "block"
    const [exploreHeight, setExploreHeight] = useState(reduced)
    const [course, setCourse] = useState(reduced)
    const [units, setUnits] = useState(reduced)
    const [portal, setPortal] = useState(reduced)
    const [assign, setAssign] = useState(reduced)
    const [cat, setCat] = useState(reduced)
    
  return (
    <div>
       <nav class={`bg-white bg-opacity-10 backdrop-blur-sm transition-all duration-200 ease-linear`}>
                   
                   <ul className="px-4 pt-4 font-mono tracking-wide flex items-center justify-end gap-2 py-2 text-sm">
                       <li className="hover:text-sky-400
                       hover:cursor-pointer transition-all duration-100 ease-in border-opacity-50 py-1"><NavLink to="/">HOME</NavLink></li>
                       <li className="hover:text-sky-400
                       hover:cursor-pointer transition-all duration-100 ease-in border-opacity-50 py-1"><NavLink to="/about">ABOUT</NavLink></li>
                       <li className="hover:text-sky-400
                       hover:cursor-pointer transition-all duration-100 ease-in border-opacity-50 py-1"><NavLink to="/solve">SOLVING</NavLink></li>
                       <li className={`hover:text-sky-400
                       hover:cursor-pointer transition-all duration-100 ease-in py-1 relative`} onMouseEnter={()=>{
                        
                        if(exploreHeight == reduced) {
                            setExploreHeight(expand)
                            zIndex("-z-10")
                        }
                       }} onMouseLeave={()=>{
                        if(exploreHeight == expand) {
                            setExploreHeight(reduced)
                            zIndex("z-10")
                        }
                       }}>
                           <div className={`flex items-center justify-start gap-1`}>
                               <p>EXPLORE</p>
                               <Dropdown className="text-2xl"/>
                           </div>
                           <div className={`${exploreHeight} absolute top-full colorblue block w-fit left-0 rounded-sm`}>
                               <ul className="px-4 py-1" id="explore">
                                   <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2 whitespace-nowrap'><NavLink to="/stream">Live Streaming</NavLink></li>
                                   <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/news">News</NavLink></li>
                                   <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/events">Upcoming Events</NavLink></li>
                                   <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500'><NavLink to="/blog">Blog</NavLink></li>
                               </ul>
                           </div>
                       </li>
                       <li class="relative hover:text-sky-400 
                       hover:cursor-pointer py-1" onMouseEnter={()=>{
                        
                        if(course == reduced) {
                            setCourse(expand)
                            zIndex("-z-10")
                        } 
                       }} onMouseLeave={()=>{
                        if(course == expand) {
                            setCourse(reduced)
                            zIndex("z-10")
                        } 
                       }}>
                           <div className="flex items-center justify-start gap-1">
                               <p>COURSE</p>
                               <Dropdown className="text-2xl"/>
                           </div>
                           <div className={`${course} absolute top-full colorblue block w-fit left-0`}>
                               <ul className="px-4 py-1">
                                   <li className='relative text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2' onMouseEnter={()=>{
                                            if(assign == reduced) {
                                                setAssign(expand)
                                            }
                                        }} onMouseLeave={()=>{
                                            if(assign == expand) {
                                                setAssign(reduced)
                                            }
                                        }}>
                                       <div className='flex items-center justify-start gap-3 text-sky-100 hover:text-sky-300'>
                                           <p className=''>Assignment/s</p>
                                           <Dropdown className="text-xl"/>
                                       </div>
                                       <ul className={`${assign} absolute top-0 colorblue bg-opacity-60 block w-fit left-full p-1 rounded-sm`}>
                                           <li><NavLink className="p-1 hover:text-sky-300" to="/pending">Pending</NavLink></li>
                                           <li><NavLink className="p-1 hover:text-sky-300" to="/pending">Submitted</NavLink></li>
                                       </ul>
                                   </li>
                                   <li className='relative text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2' onMouseEnter={()=>{
                                            if(cat == reduced) {
                                                setCat(expand)
                                            }
                                        }} onMouseLeave={()=>{
                                            if(cat == expand) {
                                                setCat(reduced)
                                            }
                                        }}>
                                       <div className='flex items-center justify-start gap-3 text-sky-100 hover:text-sky-300'>
                                           <p className=''>CAT/s</p>
                                           <Dropdown className="text-xl"/>
                                       </div>
                                       <ul className={`${cat} absolute top-0 colorblue block w-fit left-full p-1 rounded-sm`}>
                                           <li><NavLink className="hover:text-sky-300 p-1" to="/pending">Pending</NavLink></li>
                                           <li><NavLink className="hover:text-sky-300 p-1" to="/pending">Submitted</NavLink></li>
                                           <li><NavLink className="hover:text-sky-300 p-1" to="/pending">Awaiting</NavLink></li>
                                       </ul>
                                   </li>
                                   <li className='text-sm text-sky-100 hover:text-sky-300 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/livestream">Exams</NavLink></li>
                               </ul>
                           </div>
                       </li>
                       <li class="relative hover:text-sky-400 
                       hover:cursor-pointer py-1" onMouseEnter={()=>{
                        if(units == reduced) {
                            setUnits(expand)
                            zIndex("-z-10")
                        }
                    }} onMouseLeave={()=>{
                        if(units == expand) {
                            setUnits(reduced)
                            zIndex("z-10")
                        }
                    }}>
                           <div className="flex items-center justify-start gap-1">
                               <p>UNITS</p>
                               <Dropdown className="text-2xl"/>
                           </div>
                           <ul className={`${units} absolute top-full colorblue block w-fit -left-full min-w-full p-2 rounded-sm overflow-hiddden`}>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2 '><NavLink className="whitespace-nowrap" to="/units/tmc4224">TMC 4224: MAT SCI & ENG II</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4221">TMC 4221: CAD</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4222">TMC 4222: MEC OF MAC. II</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4225">TMC 4225: FLUID MEC. II</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tcu4223">TCU 4223: SOLID & STRUC. II</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/ama4203">AMA 4203: STATISTICS</NavLink></li> 
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4226">TMC 4226: ENG. THERMO I</NavLink></li>
                               <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/bfi4204">BFI 4204: ECO & ACC. ENG.</NavLink></li>
                           </ul>
                       </li>
                       <li class="relative hover:cursor-pointer py-1" onMouseEnter={()=>{
                        if(portal == reduced) {
                            setPortal(expand)
                            zIndex("-z-10")
                        }
                    }} onMouseLeave={()=>{
                        if(portal == expand) {
                            setPortal(reduced)
                            zIndex("z-10")
                        }
                    }}>
                           <div className="flex items-center justify-start gap-1 hover:text-sky-300">
                               <p>PORTALS</p>
                               <Dropdown className="text-2xl"/>
                           </div>
                           <ul className={`${portal} absolute top-full colorblue block w-fit left-0 p-1 rounded-sm`}>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">Tumis</NavLink></li>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">E-Citizen</NavLink></li>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">E-Registar</NavLink></li>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">Elearning</NavLink></li>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">Href</NavLink></li>
                               <li><NavLink className='hover:text-sky-300 text-sky-100 whitespace-nowrap' to="/">TUM</NavLink></li>
                           </ul>
                       </li>
                   </ul>
               </nav> 
    </div>
  )
}

export default NavLarge

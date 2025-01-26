import React, { useState } from 'react'
import { IoIosArrowDown as Dropdown } from "react-icons/io";
import { IoIosArrowForward} from "react-icons/io";
import Topbar from './Topbar';
import { RxCross1 } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom"
const NavSmall = () => {
    const reduced = "h-0 hidden"
    const expand = "h-fit opacity-100"
    const [exploreHeight, setExploreHeight] = useState(reduced)
    const [course, setCourse] = useState(reduced)
    const [units, setUnits] = useState(reduced)
    const [portal, setPortal] = useState(reduced)
    const [assign, setAssign] = useState(reduced)
    const [cat, setCat] = useState(reduced)
    const [width, setWidth] = useState("w-0")
    const explandLinks = (elementId => {
        if (elementId == "explore") {
            //console.log(Expand.classList.keys())
            if(exploreHeight == reduced) {
                setExploreHeight(expand)
            } else {
                // Expand.classList.remove("h-fit")
                setExploreHeight(reduced)
            }
        } 

        if (elementId == "course") {
            //console.log(Expand.classList.keys())
            if(course == reduced) {
                setCourse(expand)
            } else {
                // Expand.classList.remove("h-fit")
                setCourse(reduced)
            }
        } 
        if (elementId == "units") {
            //console.log(Expand.classList.keys())
            if(units == reduced) {
                setUnits("h-fit opacity-100 px-4 py-1")
            } else {
                // Expand.classList.remove("h-fit")
                setUnits(reduced)
            }
        } 
        if (elementId == "portals") {
            //console.log(Expand.classList.keys())
            if(portal == reduced) {
                setPortal("px-4 py-1 h-fit opacity-100")
            } else {
                // Expand.classList.remove("h-fit")
                setPortal(reduced)
            }
        }
        if (elementId == "assignments") {
            //console.log(Expand.classList.keys())
            if(assign == reduced) {
                setAssign("px-4 py-1 h-fit opacity-100")
            } else {
                // Expand.classList.remove("h-fit")
                setAssign(reduced)
            }
        }
        if (elementId == "cats") {
            //console.log(Expand.classList.keys())
            if(cat == reduced) {
                setCat("px-4 py-1 h-fit opacity-100")
            } else {
                // Expand.classList.remove("h-fit")
                setCat(reduced)
            }
        }
    })
    const [display, setDisplay] = "flex"
  return (
    <>
     <div class={` flex items-center justify-between gap-5  p-3 sticky top-0 right-0 w-full text-4xl bg-white`}> 
            <div className="bgblue flex items-center justify-start gap-2 flex-wrap font-mono">
                <FaGraduationCap className=""/>
                <p className='text-3xl'>BTME</p>
            </div>
            <MdOutlineMenuOpen className="bgblue hover:cursor-pointer" onClick={()=> {
                width != "w-full" ? setWidth("w-full") : console.log("")
            }}/>
        </div>
        <nav class={`bg-white bg-opacity-10 backdrop-blur-sm text-white flex fixed top-0 right-0 ${width} min-h-screen overflow-hidden transition-all duration-200 ease-linear z-20`}>
            <div className="p-4">
            <RxCross1 className="text-black font-extra-bold text-2xl hover:cursor-pointer hover:shadow-sm hover:shadow-gray-400" onClick={() => {
                setWidth("w-0")
                // props.dis("flex", "w-0")
                console.log(width)
            }}/>
            </div>
            <ul className="w-full colorblue px-4 pt-4 font-mono tracking-wider text-sky-100">
                <li className="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1"><NavLink to="/">HOME</NavLink></li>
                <li className="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1"><NavLink to="/about">ABOUT</NavLink></li>
                <li className="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1"><NavLink to="/about">SOLVING</NavLink></li>
                <li className="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1">
                    <div className="flex items-center justify-start gap-3 border-gray-500 border-opacity-15 border-b-2" onClick={() => {
                        explandLinks('explore')
                    }}>
                        <p>EXPLORE</p>
                        <Dropdown className="text-2xl"/>
                    </div>
                    <div className={true && exploreHeight}>
                        <ul className="px-4 py-1" id="explore">
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/stream">Live Streaming</NavLink></li>
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/news">News</NavLink></li>
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/events">Upcoming Events</NavLink></li>
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500'><NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li class="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1">
                    <div className="flex items-center justify-start gap-3 border-gray-500 border-opacity-15 border-b-2" onClick={()=> {
                        explandLinks("course")
                    }}>
                        <p>COURSE</p>
                        <Dropdown className="text-2xl"/>
                    </div>
                    <div className={true && course}>
                        <ul className="px-4 py-1">
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'>
                                <div className='flex items-center justify-start gap-3 text-sky-100' onClick={()=> {
                                        explandLinks("assignments")
                                    }}>
                                    <p>Assignment/s</p>
                                    <Dropdown className="text-xl"/>
                                </div>
                                <ul className={true && assign}>
                                    <li><NavLink to="/pending">Pending</NavLink></li>
                                    <li><NavLink to="Submitted"></NavLink>Submitted</li>
                                </ul>
                            </li>
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'>
                                <div className='flex items-center justify-start gap-3 text-sky-100' onClick={()=> {
                                        explandLinks("cats")
                                    }}>
                                    <p>CAT/s</p>
                                    <Dropdown className="text-xl"/>
                                </div>
                                <ul className={true && cat}>
                                    <li><NavLink to="/pending">Pending</NavLink></li>
                                    <li><NavLink to="Submitted"></NavLink>Submitted</li>
                                    <li><NavLink to="/pending">Awaiting</NavLink></li>
                                </ul>
                            </li>
                            <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/livestream">Exams</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li class="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1">
                    <div className="flex items-center justify-start gap-3 border-gray-500 border-opacity-15 border-b-2" onClick={()=> {
                        explandLinks("units")
                    }}>
                        <p>UNITS</p>
                        <Dropdown className="text-2xl"/>
                    </div>
                    <ul className={true && units}>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4224">TMC 4224: MAT SCI & ENG II</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4221">TMC 4221: CAD</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4222">TMC 4222: MEC OF MAC. II</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4225">TMC 4225: FLUID MEC. II</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tcu4223">TCU 4223: SOLID & STRUC. II</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/ama4203">AMA 4203: STATISTICS</NavLink></li> 
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/tmc4226">TMC 4226: ENG. THERMO I</NavLink></li>
                        <li className='text-sm text-sky-300 hover:text-sky-100 transition-all ease-lineard duration-150 py-1 border-gray-500 border-opacity-10 border-b-2'><NavLink to="/units/bfi4204">BFI 4204: ECO & ACC. ENG.</NavLink></li>
                        
                    </ul>
                </li>
                <li class="hover:text-sky-400 border-b-2 border-amber-700 hover:border-opacity-80
                hover:cursor-pointer border-opacity-50 py-1">
                    <div className="flex items-center justify-start gap-3 border-gray-500 border-opacity-15 border-b-2" onClick={()=> {
                        explandLinks("portals")
                    }}>
                        <p>PORTALS</p>
                        <Dropdown className="text-2xl"/>
                    </div>
                    <ul className={true && portal}>
                        <li><NavLink to="/">Tumis</NavLink></li>
                        <li><NavLink to="/">E-Citizen</NavLink></li>
                        <li><NavLink to="/">E-registra</NavLink></li>
                        <li><NavLink to="/">Elearning</NavLink></li>
                        <li><NavLink to="/">Href</NavLink></li>
                        <li><NavLink to="/">TUM</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavSmall
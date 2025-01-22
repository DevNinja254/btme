import React from 'react'
import Contact from "./Contact"
import ImportantLink from './ImportantLink'
import StudentResources from './StudentResources';
import { FaGraduationCap } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='colorblue text-white mt-3 pt-4'>
        <div className='flex items-center justify-evenly'>
            <div className='py-3 text-center'>
                <div className='grid place-content-center'>
                <FaGraduationCap size={40}/>
                </div>
                <div>
                    <h3 className='text-lg tracking-wide font-bold'>BTME2023</h3>
                    <p className='font-mono text-sm'>Technical University of Mombasa</p>
                </div>
            </div>
            <div className="md:flex items-start justify-evenly lg:gap-5">
                <Contact/>
                <StudentResources/>
                <ImportantLink/>
            </div>
        </div>
        <div className='bg-amber-600 text-center p-2 text-bold font-mono md:flex items-center justify-between'>
            <p>Copyright &copy; {() => {return `${new Date().getFullYear()}`}} B.Tech In TUM</p>
            <p>All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer

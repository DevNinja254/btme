import React from 'react'
import LatestNews from './LatestNews'
import Post from './Post'
import Calendar from "./Calendar"
import Qoute from "./Qoute"
const Content = () => {
  return (
    <div className='lg:gap-3 lg:mt-5'>
        <div className='lg:grid grid-cols-3 place-content-center lg:w-5/6 m-auto gap-5'>
          <LatestNews/>
          <Post/>
          <Calendar/>
        </div>
        
        <Qoute/>
    </div>
  )
}

export default Content
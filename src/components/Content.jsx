import React from 'react'
import LatestNews from './LatestNews'
import Post from './Post'
import Calendar from "./Calendar"
import Qoute from "./Qoute"
const Content = () => {
  return (
    <div>
        <LatestNews/>
        <Post/>
        <Calendar/>
        <Qoute/>
    </div>
  )
}

export default Content
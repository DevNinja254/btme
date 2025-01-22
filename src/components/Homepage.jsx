import React, {useState} from 'react'
import Header from "./Header"
import Slideshow from './Slideshow'
import Content from './Content'
import Footer from './Footer'

const Homepage = () => {
  const [index, setIndex] = useState("z-10")
  const zIndex = (index) => {
    setIndex(index)
  }
  return <>
    <Header zIndex={zIndex}/>
    <Slideshow index={index} />
    <Content/>
    <Footer/>
  </>
}
export default Homepage
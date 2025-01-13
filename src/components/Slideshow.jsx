import React from 'react'
import engine0 from "../images/engine0.jpeg"
import engine1 from "../images/engine1.jpeg"
import engine2 from "../images/engine2.jpeg"
import engine3 from "../images/engine3.jpeg"
import engine4 from "../images/engine4.jpeg"
import engine5 from "../images/engine5.jpeg"
import engine6 from "../images/engine6.jpeg"
const slides = [engine0, engine1, engine2, engine3, engine4, engine5, engine6]
const Slideshow = () => {
  return (
    <div>
      {slides.map((slide, index) => {
        return <img src={slide} key={index} alt={`Engine ${index}`} />
      })}
    </div>
  )
}

export default Slideshow;
import React, {useState, useEffect} from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import engine0 from "../assets/images/engine0.jpeg"
import engine1 from "../assets/images/engine1.jpeg"
import engine2 from "../assets/images/engine2.jpeg"
import engine3 from "../assets/images/engine3.jpeg"
import engine4 from "../assets/images/engine4.jpeg"
import engine5 from "../assets/images/engine5.jpeg"
import engine6 from "../assets/images/engine6.jpeg"
const slides = [engine0, engine1, engine2, engine3, engine4, engine5, engine6]
const Slideshow = ({index}) => {
  const [curr, setCurr] = useState(0)
  const prev = () => {
    setCurr((curr) => curr == 0 ? slides.length - 1 : curr -1)
  }
  const next= () => {
    setCurr((curr) => curr ==slides.length-1 ? 0 : curr + 1)
  }
  useEffect(() => {
    const scroll = false
    if(scroll){return console.log("no scroll")}
    const slideInterval = setInterval(next, 3000)
    return () => clearInterval(slideInterval)
  }, [])
  return (
  <div className={`overflow-hidden relative ${index}`}>  
    <div className="flex transition-transform ease-out duration-500" style={{
      transform: `translateX(-${curr * 100}%)`
    }}>
      {slides.map((slide, index) => (
        <img src={slide} key={index} id="slideFig" className=" object-cover" alt={slide} />
      ))}
    </div>
      {/* slider buttons */}
      <div className='absolute inset-0 z-20 flex items-center justify-between p-4'>
        <button onClick={prev} className='bg-gray-100 rounded-full bg-opacity-80 hover:bg-white shadow-sm shadow-gray-500'>
          <BiChevronLeft size={40}/>
        </button>
        <button onClick={next} className='bg-gray-100 rounded-full bg-opacity-80 hover:bg-white shadow-sm shadow-gray-500'>
          <BiChevronRight size={40}/>
        </button>
      </div>
      {/* slides active */}
      <div className="absolute bottom-4 flex justify-center items-center gap-1 w-full">
        {slides.map((_, i) => (
          <div onClick={() => setCurr(i)} className={`bg-white w-3 h-3 rounded-full hover:cursor-pointer z-20 ${curr == i ? "p-2" : "opacity-50"}`}/>
        ))}          
      </div>
</div>

  )
}

export default Slideshow;
import React from 'react'
import Iframe from "react-iframe" 

const PlayingVidz = ({url, title, descr}) => {
  // const 
  return (
    <div>
      <div id='playContainer'>
      <iframe src={url}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{
      background:"transparent",
      width: "100%",
      height: "100%"
    }}/>
      </div>
      <p className=' px-2 text-white my-2 text-lg font-mono'>{title}</p>
      <p className='text-white bg-gray-800 bg-opacity-20 text-opacity-60 m-2 p-1 rounded-sm'><p className='font-extrabold'>Description</p>{descr}</p>

    </div>

  )
}

export default PlayingVidz

import React from 'react'
import engine1 from "../assets/images/engine1.jpeg"
import engine2 from "../assets/images/engine2.jpeg"
import engine3 from "../assets/images/engine3.jpeg"
import engine4 from "../assets/images/engine4.jpeg"
import engine5 from "../assets/images/engine5.jpeg"
import engine6 from "../assets/images/engine6.jpeg"


const Post = () => {
    const slides = [engine1,engine2, engine3, engine4, engine5, engine6]
    const description = "Claritas est etiam processus dynamicus, qui sequitur mutationem dsfjdfsdfafdsfsdfijsgflskgjsfgfsdgfnvjdjvfdgdf"
    const slider = slides.map((slide, index) => (
        <a href="/" key={index} className="flex items-start justify-start gap-2 my-3 shadow-sm shadow-gray-300 py-1">
         <figure className="w-36 object-cover block h-"><img src={slide} width="240" height="170" alt={index} /></figure>
         <div>
           <h3 className="font-mono  opacity-80">It Was My Best Experience </h3>
           <p className='pr opacity-70 '>{description.length < 50 ? description: `${description.slice(0, 50)}[...]`}</p>
         </div>
       </a>
     ))
    return (
        <div className="my-4 mx-2" >
            <h2 className="text-xl mb-2 sticky top-0 bg-white font-mono text-gray-800">Posts</h2>
            <div className="scroller" style={{
                    maxHeight: "50vh",
                    overflowY: "scroll",
                    overflowX: "hidden"
                }}>
            {slider}
            </div>
            <a href="/" className="bg-gray-500 block text-center py-1 bg-opacity-30 text-gray-800 font-serif text-md rounded-sm text-opacity-90">View All Posts</a>
        </div>
    )
}

export default Post
import React from 'react'
const slides = [1, 2, 2, 3, 4]
const slider = slides.map((slide, index) => {
  return <div key={index}>
    <figure><img src={require(`../images/engine${index}.jpeg`)} width="240" height="170" alt={index} /></figure>
    <div>
      <h3>It Was My Best Experience </h3>
      <p>Claritas est etiam processus dynamicus, qui sequitur mutationem[...]</p>
    </div>
  </div>
})

const LatestNews = () => {
  return (
   <div>
    <h2>Latest News</h2>
    {slider}
    <div>
      <a href="/">View All Latest News</a>
    </div>
   </div>
  )
}

export default LatestNews
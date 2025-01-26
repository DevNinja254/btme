import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import data from '../assets/json/news.json'
const LatestNews = () => {
  const api_key = "8686d59426584f37b1d1c46134a5499c"
    // const url = `https://newsapi.org/v2/everything?q=mechanical engineering&pageSize=100&apiKey=${api_key}`
    const [news, setNews] = useState(data.news)
    // useEffect(() => {
    //   fetch(url)
    //   .then(res => (res.json()))
    //   .then(data => {    
        
    //     let dats = []
    //     let i = 0 
    //     for (const dat of data.articles) {
    //       if (dat.author && dat.urlToImage) {
    //         dat.publishedAt = new Date(dat.publishedAt).toDateString()
    //         const newsa = {
    //           "author": (dat.author),
    //           "publishedAt": String(dat.publishedAt),
    //           "title":  String(dat.title),
                    
    //         }
    //         console.log(newsa)
    //         dats.push(dat)
    //       }
    //       i += 1
    //     }
    //   })
    //   .catch(error => {
    //     setNews(error)
    //   })
    // }, [])
  return (
   <div className="my-4 mx-2" >
    <h2 className="text-xl mb-2 font-mono text-gray-800 sticky top-0 bg-white">Latest News</h2>
    <div className="scroller" style={{
    maxHeight: "50vh",
    overflowY: "scroll",
    overflowX: "hidden"
   }}>
    {news.map((newz, index) => (
        index < 11 ? <NavLink to={newz.url} key={index} className="flex items-start justify-start gap-2 my-3 shadow-sm shadow-gray-300 py-1">
        <figure className='h-full' ><img className="img6" src={require(newz.urlToImage)}
         width="240" height="170" alt={index} /></figure>
        <div>
          <h3 className="font-mono  opacity-80">{newz.title}</h3>
          <p className='pr opacity-70'>{String(newz.description).length < 50 ? newz.description: `${String(newz.description).slice(0, 50)}[...]`}</p>
        </div>
      </NavLink> : false
      ))} 
    </div>
     
    <NavLink to="/news" className="bg-gray-500 block text-center py-1 bg-opacity-30 text-gray-800 font-serif text-md rounded-sm text-opacity-90">View All Latest News</NavLink>
   </div>
  )
}

export default LatestNews
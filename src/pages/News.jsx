import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiSearch as Search } from 'react-icons/bi'
import { BsPerson as Person } from 'react-icons/bs'
import engine from "../assets/images/engine0.jpeg"
import { FaLocationArrow as Messager } from 'react-icons/fa'
import { RiFacebookFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { DiGithubBadge, DiGithubFull } from 'react-icons/di'
import data from "../assets/json/news.json"
const News = () => {
  // const api_key = "8686d59426584f37b1d1c46134a5499c"
  // const url = `https://newsapi.org/v2/everything?q=mechanical engineering&pageSize=50&apiKey=${api_key}`
  const [news, setNews] = useState(data.news)
  const recentNews = news[7]
  return (
    <div>
      <div className='bg-black bg-opacity-90 grid place-content-center gap-4 w-full py-3 text-slate-300 text-opacity-70 font-bold text-lg sm:flex sm:items-center sm:justify-between sm:px-5 '>
       <nav className='flex items-center justify-center gap-4'>
          <NavLink className="hover:text-amber-600 transition-color duration-100 ease-linear" to="/">Home</NavLink>
          <NavLink className="hover:text-amber-600 transition-color duration-100 ease-linear" to="/stream">Live TV</NavLink>
          <NavLink className="hover:text-amber-600 transition-color duration-100 ease-linear" to="/blog">Blog</NavLink>
          <NavLink className="hover:text-amber-600 transition-color duration-100 ease-linear" to="/posts">Posts</NavLink>
        </nav>
      <div className='flex items-center justify-center gap-3'>
        <RiFacebookFill className="hover:text-amber-600 transition-color duration-100 ease-linear hover:cursor-pointer" size={23}/>
        <RiTwitterFill className="hover:text-amber-600 transition-color duration-100 ease-linear hover:cursor-pointer" size={23}/>
        <RiYoutubeFill className="hover:text-amber-600 transition-color duration-100 ease-linear hover:cursor-pointer" size={23}/>
        <DiGithubBadge className="hover:text-amber-600 transition-color duration-100 ease-linear hover:cursor-pointer" size={23}/>
      </div>
      </div>
      <div className='m-3 flex items-center justify-between py-1 lg:w-5/6 lg:mx-auto'>
        <h1 className='font-extrabold text-2xl'>NEWS<span className='textYellow'>TECH</span></h1>
        <nav className='hidden'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stream">Live TV</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </nav>
        <div className='flex items-center justify-end gap-3'>
            <div><Search size={25}/></div>
            <div><Person size={25}/></div>
        </div>
      </div>
      <div className='m-3 sm:grid grid-cols-3 gap-4 sm:m-5 lg:w-5/6 lg:mx-auto'>
        <NavLink to={news[0].url} className="relative col-span-2 row-span-2">
          <figure className='img mb-4'>
            <img src={require(news[0].urlToImage)} className='w-full ' alt="" />
          </figure>
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-3 sm:h-full sm:grid sm:place-content-end sm:bg-opacity-60 '>
            <h2 className='text-white font-bold text-lg font-sans mb-1 tracking-wide'>{news[0].title}</h2>
            <div className='text-slate-100 flex gap-3 text-sm'>
              <p>by <span className='textYellow font-bold'>{news[0].author}</span></p>
              <p>{news[0].publishedAt}</p>
            </div>
          </div>
        </NavLink>
        {news.map((newz, index) => (
          index < 6 && index > 0? <NavLink to={newz.url} key={index} className="relative">
          <figure className='img2 my-3 sm:my-0'>
            <img src={require(newz.urlToImage)} className='w-full' alt="" />
          </figure>
          <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-3 sm:top-0 sm:grid sm:place-content-center'>
            <h2 className='text-white font-bold text-lg font-sans mb-1 tracking-wide'>{String(newz.title).length > 70 ? `${String(newz.title).slice(0, 70)}[...]`:newz.title }</h2>
            <div className='text-slate-100 flex gap-3 text-sm'>
              <p>by <span className='textYellow font-bold'>{newz.author}</span></p>
              <p>{newz.publishedAt}</p>
            </div>
          </div>
        </NavLink>: null 
        ))}
      </div>
      <div className='mx-3 mt-4 sm:w-5/6 sm:mx-auto'>
        <h2 className='py-3 font-extrabold text-opacity-90 text-gray-900 text-xl'>RECENT NEWS</h2>
        <div className='border-b-2 border-gray-300 bg-opacity-30 mb-5'>
            <hr className='text-black bgYellow w-1/4 h-2 border-none'/>
        </div>
        <div className='sm:grid grid-cols-2 gap-5 sm:my-3'>
          <NavLink to={recentNews.url}>
            <figure className='img5'>
            <img src={require(recentNews.urlToImage)} alt="" />
            </figure>
            <p className='font-bold text-lg w-4/5 tracking-wide mb-1'>{recentNews.title}</p>
            <div className='text-sm flex gap-3 mb-3'>
              <p>by <span className='text-md font-bold font-mono'>{recentNews.author}</span></p>
              <p>{recentNews.publishedAt}</p>
            </div>
            <p className='text-opacity-80 text-gray-800 mb-4'>{recentNews.description}</p>
          </NavLink>
          <div>
            {news.map((newz, index) => (
              index > 7 && index <  12 ? <NavLink to={newz.url} key={index} className="flex gap-4 mb-4 items-center sm:items-start justify-start hover:text-amber-700">
              <figure>
                <img src={require(newz.urlToImage)} className='img3' alt="" />
              </figure>
              <div>
                <h2 className='font-bold'>{newz.title}</h2>
                <div className='flex items-center justify-start text-sm gap-2 '>
                  <p>by <span className='font-bold text-amber-700'>{newz.author}</span></p>
                  <p>{newz.publishedAt}</p>
                </div>
              </div>
            </NavLink>: null 
            ))}
          </div>
      </div>
    </div>
    {/* popular POST */}
    <div className='mx-3'>
      <h2 className='py-3 font-extrabold text-opacity-90 text-gray-900 text-xl'>POPULAR POSTS</h2>
      <div className='border-b-2 border-gray-300 bg-opacity-30 mb-5'>
            <hr className='text-black bgYellow w-1/4 h-2 border-none'/>
        </div>
      <div>
        {news.map((newz, index) => (
          index > 12 && index <  17 ? <NavLink to={newz.url} key={index} className="flex gap-4 mb-4 items-center justify-start hover:text-amber-700"> 
          <figure>
            <img src={require(newz.urlToImage)} className='img3' alt="" />
          </figure>
          <div>
            <h2 className='font-bold'>{newz.title}</h2>
            <div className='flex items-center justify-start text-sm gap-2 '>
            <p>by <span className='font-bold text-amber-700'>{newz.author}</span></p>
            <p>{newz.publishedAt}</p>
            </div>
          </div>
        </NavLink>: null 
        ))}
      </div>
    </div>
    <div className='m-3 relative sm:w-1/2 lg:w-1/3 sm:mx-auto'>
      <figure>
        <img src={engine} className='img4' alt="" />
      </figure>
      <div className='absolute top-0 left-0 w-full h-full grid place-content-center bg-black bg-opacity-70'>
        <p className='text-white font-bold text-lg'>Available for mobile & desktop</p>
        <NavLink className="textYellow font-bold text-center  text-lg" to="/"><span className='bYellow'>Download for free</span></NavLink>
      </div>
    </div>
    {/* newsletter */}
    <div className='m-3 sm:w-1/2 lg:w-1/3 sm:mx-auto'>
      <h2 className='py-3 font-extrabold text-opacity-90 text-gray-900 text-xl'>NEWSLETTER</h2>
      <div className='border-b-2 border-gray-300 bg-opacity-30 mb-5'>
            <hr className='text-black bgYellow w-1/4 h-2 border-none'/>
        </div>
      <p className='text-lg pt-2 text-opacity-70 text-gray-950 tracking-wide'>Subscribe to our newsletter to get notification about new updates, information, discount, etc..</p>
      <form action="" className='my-2 letter'>
        <input type="email" name='email' placeholder='Your email' />
        <button><Messager className='text-white' size={30}/></button>
      </form>
    </div>
    <div className='p-3 bg-black text-white'>
        <div className='sm:grid grid-cols-3 gap-3 md:w-5/6 md:mx-auto'>
          <div className='mb-4'>
            <h1 className='font-extrabold text-2xl'>NEWS<span className='textYellow'>TECH</span></h1>
            <p className='text-md pt-2 text-opacity-60 text-gray-100 tracking-wide mb-2'>BTME is an open-source, Project created by B.TECH tum student to ease their leaning and make engineering more fun.</p>
            <p className='text-md pt-2 text-opacity-60 text-gray-100 tracking-wide'>Copyright &copy;2025 All rights reserved | This site is coded by Augustine</p>
          </div>
          <div>
            <h2 className='textYellow font-bold text-lg my-2'>MOST POPULAR</h2>
            {news.map((newz, index) => (
            index > 18 && index <  21 ? <NavLink to={newz.url} key={index} className="">
            <div className='py-3 border-b-2 border-gray-600 border-opacity-50 sm:border-none'>
              <h2 className='text-gray-300 text-opacity-90 font-bold text-md hover:textYellow'>{newz.title}</h2>
              <div>
                <p className='pt-2 text-opacity-60 text-gray-300 tracking-wide text-sm'>{newz.publishedAt}</p>
              </div>
            </div>
            </NavLink>: null 
            ))}
          </div>
          <div>
            <h2 className='textYellow font-bold text-lg my-2'>MOST POPULAR</h2>
            {news.map((newz, index) => (
            index > 20 && index <  23 ? <NavLink to={newz.url} key={index} className="">
            <div className='py-3 sm:border-none'>
              <h2 className='text-gray-300 text-opacity-90 font-bold text-md hover:textYellow'>{newz.title}</h2>
              <div>
                <p className='pt-2 text-opacity-70 text-gray-300 tracking-wide text-sm'>{newz.publishedAt}</p>
              </div>
            </div>
            </NavLink>: null 
            ))}
          </div>
        </div>
        <div className='mt-5 border-t-2 border-gray-600 border-opacity-50 pt-2 text-opacity-60 text-gray-100 md:flex items-ceter justify-between md:w-5/6 md:mx-auto'>
          <div className='flex flex-wrap items-center justify-center gap-2 pb-2 md:text-sm'>
            <NavLink className="whitespace-nowrap" to="/news/term">Terms & Conditions</NavLink>
            <NavLink className="whitespace-nowrap" to="/news/privacy">Privacy policy</NavLink>
            <NavLink className="whitespace-nowrap" to="/news/jobs">Jobs advertising</NavLink>
            <NavLink className="whitespace-nowrap" to="/contact">Contact us</NavLink>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <RiFacebookFill size={23}/>
            <RiTwitterFill size={23}/>
            <RiYoutubeFill size={23}/>
            <DiGithubBadge size={23}/>
          </div>
      </div>
    </div>
  </div>
  )
}

export default News

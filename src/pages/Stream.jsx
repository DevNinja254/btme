import React, {useState} from 'react'
import Nav from '../pagesComponent/streamComponents/Nav'
import PlayingVidz from '../pagesComponent/streamComponents/PlayingVidz'
import { CgProfile as Profile } from 'react-icons/cg'
import { BiHome as Home} from 'react-icons/bi'
import { BiNews  as News} from 'react-icons/bi'
import { SiMinds as Solve } from 'react-icons/si'
import nasa from "../assets/images/stream/nasa.png"
import rnb from "../assets/images/stream/rnb.png"
import vin from "../assets/images/stream/vin.png"
import speech from "../assets/images/stream/speech.png"
import mancity from "../assets/images/stream/mancity.png"
import { NavLink } from 'react-router-dom'
import { BiSearch as Search } from 'react-icons/bi'
const Stream = () => { 
  const [play, setPlay] = useState("https://geo.dailymotion.com/player.html?video=x38ai8y")
  const [title, setTitle] = useState("The Sonic: Alien from Planet 10")
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta doloribus fugit. Obcaecati, ratione repellendus doloremque aperiam quisquam vitae dolore!")
  const [cartegory, setCartegory] = useState("all")
  const iframes = document.querySelectorAll("iframe")
  for (const iframe of iframes) {
    iframe.src = iframe.src
  }
  return (
    <div className='bg-black min-h-screen'>
      <header className='p-3 sticky top-0 bg-black z-10'>
        <div className=' text-gray-200 flex items-center justify-between font-bold text-xl sm:hidden'>
          <h1 className=''>BTME</h1>
          <Search size={25}/>
        </div>
        <Nav/>
        <div className='text-white flex text-lg gap-2 px-1 my-3  sm:justify-evenly md:justify-center md:gap-6' id="streamButtons">
        <button onClick={()=> {
          setCartegory("all")
        }}>All</button>
        <button onClick={()=> {
          setCartegory("education")
        }}>Education</button>
        <button onClick={()=> {
          setCartegory("sports")
        }}>Sports</button>
        <button onClick={()=> {
          setCartegory("movies")
        }}>Movies</button>
        <button onClick={()=> {
          setCartegory("musics")
        }}>Music</button>
        <button onClick={()=> {
          setCartegory("news")
        }}>News</button>
        <button onClick={()=> {
          setCartegory("trending")
        }}>Trending</button>
      </div>
      </header>
      
      <div>
        <PlayingVidz url={play} title={title} descr={description}/>
      </div>
      <div className='sm:grid grid-cols-2 gap-4 sm:mx-3 lg:grid-cols-3 2xl:grid-cols-4'>
        {/* Eduaction */}
        <div className={`${cartegory == "all" || cartegory == "education" ? "block" : "hidden"} text-white `}>
          {/* video container */}
          <div className="grid grid-cols-2 gap-2 my-3 bg-color  sm:rounded-md" onClick={()=> {
            window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://geo.dailymotion.com/player.html?video=x8nbzvr")
              setTitle("DISCIPLINE YOURSELF EVERY DAY - Best Motivational Speech (Jordan Peterson Motivation)")
              setDescription("Get ready to harness the power of self-discipline with this compelling and insightful motivational speech by the renowned Jordan Peterson. In this thought-provoking video, Peterson delivers a captivating address that emphasizes the vital importance of cultivating discipline in our daily lives.")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={speech} className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'>DISCIPLINE YOURSELF EVERY DAY - Best Motivational Speech (Jordan Peterson Motivation)</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'>Education</p>
              </span>
            </div>
          </div>
        </div>
        {/* movies */}
        <div className={`${cartegory == "all" || cartegory == "movies" ? "block" : "hidden"} text-white`}>
          <div className="sm:rounded-md grid grid-cols-2 gap-2 my-3 bg-color" onClick={()=> {
            window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://geo.dailymotion.com/player.html?video=x94mq4w")
              setTitle("Vin Diesel | 2024 Action | Full New Action Movie | Action Movie in English 2024")
            setDescription("BLOCKBUSTER cinema Action movie, thriller, adventure film, suspense film, dynamic film, action, adventure, forceful film, militia film, brutal film, War movie, film about war, war drama, war epic, military film, battle movie, film about battles, combat epic, military-historical film, army film")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={vin} className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'>Vin Diesel | 2024 Action | Full New Action Movie | Action Movie in English 2024</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'>Job</p>
              </span>
            </div>
          </div>
        </div>

        {/* sports */}
        <div className={`${cartegory == "all" || cartegory == "sports" ? "block" : "hidden"} text-white`}>
        <div className="sm:rounded-md grid grid-cols-2 gap-2 my-3 bg-color" onClick={()=> {
          window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://la12hd.com/vivo/canales.php?stream=espn2mx")
              setTitle("РSG vs Mаnсhеstеr Сіty")
            setDescription("The channel will go live 30mins before the match")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={mancity} className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'>РSG vs Mаnсhеstеr Сіty</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'>Augustine</p>
              </span>
            </div>
          </div>
        </div>
        {/* Music */}
        <div className={`${cartegory == "all" || cartegory == "musics" ? "block" : "hidden"} text-white`}>
        <div className="sm:rounded-md grid grid-cols-2 gap-2 my-3 bg-color" onClick={()=> {
              window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://geo.dailymotion.com/player.html?video=x5dzxqf")
              setTitle("NEW Hip Hop R&B Mashup Mix 2015 Nicki Minaj ft Chris Brown, Wizd")
            setDescription("NEW Hip Hop R&B Mashup Mix 2015 Nicki Minaj ft Chris Brown, Wiz")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={rnb} className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'>NEW Hip Hop R&B Mashup Mix 2015 Nicki Minaj ft Chris Brown, Wizd</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'> Devninja254</p>
              </span>
            </div>
          </div>
        </div>
        {/* News */}
        <div className={`${cartegory == "all" || cartegory == "news" ? "block" : "hidden"} text-white`}>
        <div className="sm:rounded-md grid grid-cols-2 gap-2 my-3 bg-color" onClick={()=> {
              window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://www.youtube.com/embed/gCNeDWCI0vo?si=Bhdu8-OEKRCY7Xki")
              setTitle("Al Jazeera English | Live")
            setDescription("Stay Informed: Watch Al Jazeera English Live: @Al Jazeera English,  we focus on people and events that affect people's lives. We bring topics to light that often go under-reported, listening to all sides of the story and giving a 'voice to the voiceless'.Reaching more than 270 million households in over 140 countries across the globe, our viewers trust Al Jazeera English to keep them informed, inspired and entertained. Our impartial, fact-based reporting wins worldwide praise and respect. It is our unique brand of journalism that the world has come to rely on")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={nasa}className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'> Al Jazeera English | Live</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'>Job</p>
              </span>
            </div>
          </div>
        </div>
        {/* trending */}
        <div className={`${cartegory == "all" || cartegory == "trending" ? "block" : "hidden"} text-white`}>
        <div className="sm:rounded-md grid grid-cols-2 gap-2 my-3 bg-color" onClick={()=> {
              window.scrollTo({top:0, left:0, behavior:'smooth'})
              setPlay("https://geo.dailymotion.com/player.html?video=x9ctiia")
              setTitle("NASA Tests Artemis Moon Rocket Engine At Stennis Space Center")
            setDescription("Watch how the Space Launch System rocket RS-25 undergoes a core stage engine test-fire. Credit: NASA's Stennis Space Center")
            }}>
            {/* iframed */}
            <div className='streamImgCont rounded-md overflow-hidden'>
              <img src={nasa} className="w-full h-full object-cover" width="150" height="100" alt="" />
            </div>
            {/* descrpit */}
            <div className='font-sans tracking-wide flex flex-col justify-evenly gap-3 px-1 py-3'>
              <p className='opacity-70 text font-bold'>NASA Tests Artemis Moon Rocket Engine At Stennis Space Center</p>
              <span className='flex gap-2 opacity-60'>
              <Profile className="text-white font-extrabold" size={25}/><p className='capitalize text-lg font-bold'>Job</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex fixed bottom-0 bg-gray-800 w-full text-white justify-evenly p-1 0 sm:hidden'>
        <NavLink className="text-center text-slate-300" to="/">
          <div className='grid place-content-center'>
            <Home size={20}/>
          </div>
          <p className='text-sm'>Home</p>
        </NavLink>
        <NavLink className="text-center text-slate-300" to="/news">
        <div className='grid place-content-center'>
          <News/>
          </div>
          <p size={20}>News</p>
        </NavLink>
        <NavLink className="text-center text-slate-300" to="/solve">
        <div className='grid place-content-center'>
          <Solve className='text-white' size={20}/>
          </div>
          <p className='text-sm'>Solve</p>
        </NavLink>
        <NavLink className="text-center  text-slate-300" to="/profile">
        <div className='grid place-content-center'>
          <Profile  size={20}/>
          </div>
          <p className='text-sm'>Profile</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Stream

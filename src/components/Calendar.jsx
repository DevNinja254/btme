import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
const Calendar = () => {
    const events = [1,2, 3, 4, 5]
    const Day = "MON"
    const Date = "12"
    const Month = "JAN"
    const Title = "Weekend at Sayindan Sierra Camp"
    const reference = "FET 316, TUM"
    const description = "thisoiudfisdhfsdfjgfdghdvbdfv dsfgjkdfj gdk fgsldjfg i giregfghdis fge jnjfjds fdfkjsdf fioerjio"
  return (
    <div className="my-4 mx-2">
        <h2 className="sticky top-0 bg-white text-xl mb-2  mt-3 font-mono backdrop-blur-md text-gray-800">Event Calendar</h2>
        <div className='scroller' style={{
                    maxHeight: "50vh",
                    overflowY: "scroll",
                    overflowX: "hidden"
                }}>
        {
           events.map((post, index)=> {
                return (
                    <div key={index} className="flex items-start justify-start gap-2 mb-3 shadow-sm shadow-gray-300 py-1">
                        <div className="text-lg uppercase">
                            <span>
                                <p className='font-mono tracking-wider text-bold opacity-90'>{Day}</p>
                                <p className="font-mono text-amber-600 text-bold text-center">{Date}</p>
                            </span>    
                            <p className='font-mono tracking-wider text-bold opacity-90'>{Month}</p>            
                        </div>
                        <div className="ml-2 shadow-sm shadow-slate-200">
                            <h3 className="font-mono  opacity-80 pb-1">{Title}</h3>
                            <p className='pr opacity-70 pb-2'>{description.length < 50 ? description: `${description.slice(0, 50)}[...]`}</p>
                            <p className="flex items-center justify-start gap-3 text-sm font-serif opacity-70"><CiLocationOn className="text-md opacity-100 font-bold"/>{reference}</p>
                        </div>
                    </div>)
                })
            }
        </div>
        <div>
            <NavLink to="/events" className="bg-gray-500 block text-center py-1 bg-opacity-30 text-gray-800 font-serif text-md rounded-sm text-opacity-90">View All Event Calendar</NavLink>
        </div>
    </div>
  )
}

export default Calendar
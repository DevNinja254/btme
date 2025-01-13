import React from 'react'
import { CiLocationOn } from "react-icons/ci";
const Calendar = () => {
    const events = [1,2, 3, 4, 5]
    const Day = "MON"
    const Date = "12"
    const Month = "JAN"
    const Title = "Weekend at Sayindan Sierra Camp"
    const reference = "FET 316, TUM"
  return (
    <div>
        <h2>Event Calendar</h2>
            {
                events.map((post, index)=> {
                    return (
                    <div key={index}>
                        <div>
                            <span>
                                <p>{Day}</p>
                                <p>{Date}</p>
                            </span>    
                            <p>{Month}</p>            
                        </div>
                        <div>
                            <p>{Title}</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, provident?</p>
                            <p><CiLocationOn/>{reference}</p>
                        </div>
                    </div>)
                })
            }
            <div>
                <a href="/">View All Event Calendar</a>
            </div>
        </div>
  )
}

export default Calendar
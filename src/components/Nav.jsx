import React from 'react'
import { IoIosArrowDown as Dropdown } from "react-icons/io";
import { IoIosArrowForward as Forwardarrow } from "react-icons/io";
const NavSmall = () => {
  return (
    <nav>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/about">SOLVING</a></li>
            <li>
                <div>
                    <p>EXPLORE</p>
                    <img src="" alt="drop" />
                </div>
                <div>
                    <ul>
                        <li><a href="/livestream">Live Streaming</a></li>
                        <li><a href="/livestream">News</a></li>
                        <li><a href="/livestream">Upcoming Events</a></li>
                        <li><a href="/livestream">Blog</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <p>COURSE</p>
                    <img src="" alt="drop" />
                </div>
                <div>
                    <ul>
                        <li>
                            <div>
                                <p>Assignment/s</p>
                                <Dropdown/>
                            </div>
                            <ul>
                                <li><a href="/pending">Pending</a></li>
                                <li><a href="Submitted"></a>Submitted</li>
                            </ul>
                        </li>
                        <li>
                            <div>
                                <p>CAT/s</p>
                                <Dropdown/>
                            </div>
                            <ul>
                                <li><a href="/pending">Pending</a></li>
                                <li><a href="Submitted"></a>Submitted</li>
                                <li><a href="/pending">Awaiting</a></li>
                            </ul>
                        </li>
                        <li><a href="/livestream">Exams</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <p>UNITS</p>
                    <Dropdown/>
                </div>
                <ul>
                    <li><a href="/">Unit1</a></li>
                    <li><a href="/">Unit1</a></li>
                    <li><a href="/">Unit1</a></li>
                    <li><a href="/">Unit1</a></li>
                    <li><a href="/">Unit1</a></li>
                </ul>
            </li>
            <li>
                <div>
                    <p>PORTALS</p>
                    <Dropdown/>
                </div>
                <ul>
                    <li><a href="/">Tumis</a></li>
                    <li><a href="/">E-Citizen</a></li>
                    <li><a href="/">E-registra</a></li>
                    <li><a href="/">Elearning</a></li>
                    <li><a href="/">Href</a></li>
                    <li><a href="/">TUM</a></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default NavSmall
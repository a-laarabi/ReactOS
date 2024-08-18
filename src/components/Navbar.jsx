import React, { useEffect, useState } from 'react'
import { FaApple } from "react-icons/fa6";
import { IoBatteryHalf } from "react-icons/io5";
import { FaWifi, FaSearch } from "react-icons/fa";
import { BsToggles2 } from "react-icons/bs";
import siriLogo from '../assets/Siri_logo.png'
import { format } from 'date-fns';
import { useSelector } from 'react-redux';



const Navbar = () => {

  const [currentTime, setCurrentTime] = useState(format(new Date(), 'eee dd LLL HH:mm'));

  const navbarItems = useSelector((state)=> state.nav)

  useEffect(() => {
      const intervalID = setInterval(() => {
        const t = new Date()
          setCurrentTime(format(t, 'eee dd LLL HH:mm'));

      }, 1000 * 60);

      return () => clearInterval(intervalID);
  }, []);


  return (
    <div className='flex justify-between bg-transparent backdrop-blur-3xl shadow-sm px-2 font-sanfranciscoRegular text-[14px]'>
      <div className='flex gap-5 items-center text-white'>
        <div><FaApple /></div>
        {navbarItems.map((nav, i) => (
          <div key={i}>{nav}</div>
        ))}
      </div>
      <div className='flex gap-5 items-center text-white'>
        <div></div>
        <div><IoBatteryHalf /></div>
        <div><FaWifi /></div>
        <div><FaSearch /></div>
        <div><BsToggles2 /></div>
        <div><img src={siriLogo} alt='siri logo' className='w-4 h-4' /></div>
        {/* <div>Thu 16 May 16:53 {date[0]}</div> */}
        <div>{currentTime}</div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import '../header3/head3style.css'
import Component from './component'
import home from '../../../../public/image/home.png'
import about from '../../../../public/image/about.png'
import cource from '../../../../public/image/cource.png'
import admision from '../../../../public/image/Admission.png'
import placement from '../../../../public/image/placement.png'
import gellary from '../../../../public/image/Picture.png'
import contect from '../../../../public/image/User.png'
import admitionopen from '../../../../public/image/admintionOPen.png'
import logo from '../../../../public/image/logo.png'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header3 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [widthnev, setwidthnev] = useState(44);
  const logo = "/image/logo.png"; // Ensure the logo is correctly referenced

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // setwidthnev(60)
  }, []);


  return (
    <div className='header3 d-flex justify-content-between text-white px-5 w-100 position-sticky  top-0 start-0 z-3'>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${isSticky ? "bg-white shadow-md" : "bg-transparent"
          }`}
      />
        <motion.img
          src={logo}
          alt="Logo"
          className="h-100 bg-white rounded-circle" 
          animate={isSticky ? { opacity: 1, x: 0 } : { opacity: 0, x: "-50%" }}
          initial={{ opacity: 0, x: "-50%" }}
          transition={{ duration: 0.5 }}/>
 
       <div className=' d-flex justify-content-center align-items-center gap-3 '>
          <Component name='Home' icon={home} />
          <Component name='About' icon={about} />
          <Component name='Courses' icon={cource} />
          <Component name='Admission' icon={admision} />
          <Component name='Placement' icon={placement} />
          <Component name='Gallery' icon={gellary} />
          <Component name='Contact' icon={contect} />


        </div>
        <div className='position-relative'>
          <img src={admitionopen} alt="" style={{ width: '200px', height: '44px' }} />
          <p className='admition'>Admission open</p>
        </div>
    </div>
  )
}
export default Header3

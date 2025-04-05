import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
{/* <RiArrowDropDownLine /> */}
import { RiArrowDropUpLine } from "react-icons/ri";
import {Link} from 'react-router-dom'

const Component = ({name="", icon=""}) => {
    const [isMouseHover, setIsHovered]=useState(false)
  return (
    <div>
        <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        className=' link-67 d-flex justify-content-center align-items-center gap-1 component'>
            <img src={icon} alt="" />
            <p className='componentText p-0 m-0'>{name}</p>
            {isMouseHover?<RiArrowDropDownLine className='fs-4' />:<RiArrowDropUpLine className='fs-4' />} 
    
        </div>
      
    </div>
  )
}

export default Component

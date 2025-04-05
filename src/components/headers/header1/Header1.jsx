import React from 'react'
import '../header1/header1Style.css'
import facebook from '../../../../public/image/facebook.png'
import linkedin from '../../../../public/image/LinkedIn.png'
import instragram from '../../../../public/image/Instagram Circle.png'
import x from '../../../../public/image/X.png'
import email from '../../../../public/image/Email.png'
import contect from '../../../../public/image/End Call Male.png'
/* Facebook */



const Header1 = () => {
    return (
        <div className=' w-100 nev d-flex text-white justify-content-between align-items-center' style={{ background: "#0D6EFD", height:'44px' }}>
            <div  className='d-flex justify-content-center aling-items-center gap-3'>
                <div >
                    <svg
                     className='p-0 m-0'
                    width="112" height="42" viewBox="0 0 112 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.4823 0L34.6414 12.9402L52.9645 42H0L26.4823 0Z" fill="white" fill-opacity="0.15" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6414 12.9402C31.4371 10.2629 28.6289 6.1046 26.4823 0L34.6414 12.9402Z" fill="white" fill-opacity="0.15" />
                        <path d="M79.4468 0L112 42L26.4823 0L34.6414 12.9402C51.5376 27.0576 79.4468 0 79.4468 0Z" fill="white" fill-opacity="0.15" />
                    </svg>

                </div>
                <div className='d-flex justify-content-start align-items-center'>
                    <p className='fontStyle p-0 mb-2 text-white'>Connect with us :-</p>
                    <img
                     className='p-0 m-0'
                    src={facebook} alt="" />
                    <img
                 
                    src={linkedin} alt="" style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))', marginBottom:"8px"}} />
                    <img
                    
                    src={instragram} alt="" style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))', marginBottom:"8px"}}  />
                    <img
                  
                    src={x} alt="" style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))', marginBottom:"8px"}}  />
           



                </div>
            </div>
            <div className='d-flex justify-content-center aling-items-center gap-3'>
                    <div  className='d-flex justify-content-center align-items-center gap-1'>
                        <img src={email} alt=""
                        style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))', marginBottom:"8px"}}
                        />
                        <p className='header1fontfamily'  style={{ marginBottom:"8px"}}>admin@cclms.org</p>
                    </div>
                    <div  className='d-flex justify-content-center align-items-center gap-1'>
                        <img src={contect} alt=""
                        style={{filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2))', marginBottom:"8px"}}
                        />
                        <p className='header1fontfamily' style={{ marginBottom:"8px"}}>08373084200 / 08373084200</p>
                    </div>
                    <div >
                    <svg
                     className='p-0 m-0'
                    width="112" height="42" viewBox="0 0 112 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.4823 0L34.6414 12.9402L52.9645 42H0L26.4823 0Z" fill="white" fill-opacity="0.15" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6414 12.9402C31.4371 10.2629 28.6289 6.1046 26.4823 0L34.6414 12.9402Z" fill="white" fill-opacity="0.15" />
                        <path d="M79.4468 0L112 42L26.4823 0L34.6414 12.9402C51.5376 27.0576 79.4468 0 79.4468 0Z" fill="white" fill-opacity="0.15" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Header1

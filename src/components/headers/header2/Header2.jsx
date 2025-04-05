import React from 'react'
import logo from '../../../../public/image/logo.png'
import '../header2/header2style.css'
import label from '../../../../public/image/component.png'
const Header2 = () => {
    return (
        <div className='d-flex justify-content-between aling-items-center px-5 w-100 ' style={{height:'128px', background:'#F0F0F0'}}>
            <div className='d-flex  justify-content-center align-items-center w-50 gap-3'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <p className='collegename'>Contai College of Learning & Management Science</p>
                    <p className='collegeyear'>Affiliated to: MAKAUT, College Code: 340</p>
                </div>

            </div>
            <div className='w-50 d-flex justify-content-center gap-5 align-items-center'>

                <div className=''>
                <img src={label} alt="" />
                </div>
                <div>
                    <button className='buttonEnrolled'>ENROLE NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Header2

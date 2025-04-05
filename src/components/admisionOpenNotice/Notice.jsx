import React from 'react'
import '../admisionOpenNotice/notice.css'
const Notice = () => {
  return (
    <div className='notice d-flex w-100'>
      <div className='firstDiv d-flex align-items-center justify-content-center'>
        <p className='first ps-5 w-100  p-0 m-0'>
        CCLMS has an energetic & friendly environment that is decorated 
        to give every learner a pleasurable academic, professional and personal experience.
        </p>
      </div>
      <div className='secondDiv d-flex justify-content-center align-items-center'>

        <p className='second'><span>ADMISSION OPEN </span>FOR <span>2025-26</span> SESSION</p>
      </div>
    </div>
  )
}

export default Notice

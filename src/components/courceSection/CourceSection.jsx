import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image from '../../../public/image/ourcource.png';
import '../courceSection/courceSection.css';
import icon from '../../../public/image/ourcourceicon.png';
import bca from '../../../public/image/bca.png';
import { div } from 'framer-motion/client';
import Video from './Video';
import bcavideo from '../../../public/video/bca.mp4'
import bba from '../../../public/video/bba.mp4'
import { AiOutlineCheck } from "react-icons/ai";
import bhm from '../../../public/video/bhm.mp4'
import { FaLaptopCode } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";

import { FaConciergeBell } from "react-icons/fa";
// import 
const CourceSection = () => {
    const [showcource, setshowcource] = useState(1);

    return (
        <div className='w-100 bg-white'>
            <div className='headingdiv d-flex justify-content-center align-items-center'>
                <img src={image} alt="" className='w-50 mt-2' style={{ height: '100%' }} />
                <span className='text'>
                    <img src={icon} alt="" />
                    <p className='ps-2 m-0'> Our Courses</p>
                </span>
            </div>

            <div className='px-5' style={{ cursor: 'pointer' }}>
                <div className='d-flex justify-content-between align-items-center pt-1 pb-2'>

                    {/* BCA Button */}
                    <motion.div
                        className={`button border border-3 d-flex justify-content-center align-items-center py-1`}
                        onClick={() => setshowcource(1)}
                        animate={{
                            scale: showcource === 1 ? 1.1 : 1, backgroundColor: showcource === 1 ? "white" : "#0D6EFD",
                            color: showcource === 1 ? "#0D6EFD" : "white"
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' }}
                    >
                           <FaLaptopCode className='mx-2' /> BCA
                    </motion.div>

                    {/* BBA Button */}
                    <motion.div
                        className={`button border border-3 d-flex justify-content-center align-items-center py-1`}
                        onClick={() => setshowcource(2)}
                        animate={{
                            scale: showcource === 2 ? 1.1 : 1, backgroundColor: showcource === 2 ? "white" : "#0D6EFD",
                            color: showcource === 2 ? "#0D6EFD" : "white"
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' }}
                    >
                    <FaHospitalAlt className='mx-2'/>  BBA
                    </motion.div>

                    {/* BHM Button */}
                    <motion.div
                        className={`button border border-3 d-flex justify-content-center align-items-center py-1`}
                        onClick={() => setshowcource(3)}
                        animate={{
                            scale: showcource === 3 ? 1.1 : 1, backgroundColor: showcource === 3 ? "white" : "#0D6EFD",
                            color: showcource === 3 ? "#0D6EFD" : "white"
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' }}
                    >
                        <FaConciergeBell className="mx-2" /> BHM
                    </motion.div>

                </div>
            </div>


            <div className='px-5'>

                <AnimatePresence mode="wait" className='px-5 bg-danger'>
                    <motion.div
                        key={showcource} // Ensures animation on change
                        style={{ width: '100%' }}
                        className="content2  position-relative  bg-danger p"
                        initial={{ opacity: 0, x: -50 }} // Start position
                        animate={{ opacity: 1, x: 0 }} // Animation when entering
                        exit={{ opacity: 0, x: 50 }} // Exit animation
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                    >
                        {showcource === 1 ?
                            <div className='content d-flex justify-content-evenly align-items-center bg-white w-100'
                                style={{ height: '450px' }}
                            >

                                <div style={{ width: '35%' }} className='d-flex justify-content-center align-items-center py-3'>
                                    {/* <img src={bca} alt=""  /> */}
                                    <Video srcv='/video/bca.mp4' className='w-75' />
                                    {/* {bcavideo} */}
                                </div>
                            
                                <BCACourse />

                            </div> :
                            showcource == 2 ?
                                <div className='content d-flex justify-content-evenly align-items-center bg-white'
                                    style={{ height: '450px' }}
                                >



                                    <div style={{ width: '35%' }} className='d-flex justify-content-center align-items-center py-3'>
                                        {/* <img src={bca} alt="" className='w-75' /> */}
                                        <Video srcv='/video/bba.mp4' className='w-75' />

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card course-content h-100 shadow-sm border-0">
                                            <div className="card-header bg-primary text-white py-3">
                                                <h3 className="card-title text-center mb-0">BBA in Hospital Management</h3>
                                            </div>
                                            <div className="card-body">
                                                <p className="lead">The Bachelor of Business Administration in Hospital Management is a specialized program that equips students with business administration skills focused on healthcare settings. Students learn hospital operations, healthcare economics, patient care management, and healthcare laws and ethics.</p>

                                                <div className="row mt-4">
                                                    <div className="col-md-12">
                                                        <h5 className="fw-bold"><i className="fas fa-hospital me-2 text-primary"></i>Curriculum Highlights:</h5>
                                                        <div className="row mt-2">
                                                            <div className="col-md-6">
                                                                <ul className="course-features list-unstyled">






                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />
                                                                        <li>Healthcare Management Principles</li>
                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Hospital Administration</li>
                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Healthcare Economics</li>
                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Medical Terminology</li>
                                                                    </span>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <ul className="course-features list-unstyled">

                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />
                                                                        <li>Healthcare Marketing</li>

                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Hospital Information Systems</li>

                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Patient Care Management</li>

                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Healthcare Laws and Ethics</li>

                                                                    </span>








                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-white border-0 text-end pt-0">
                                                <a href="#" className="btn btn-primary">Explore More <i className="fas fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                    </div>


                                </div> :
                                <div className='content d-flex justify-content-evenly align-items-center bg-white'
                                    style={{ height: '450px' }}
                                >

                                    <div style={{ width: '35%' }} className='d-flex justify-content-center align-items-center py-3'>
                                        {/* <img src={bca} alt="" className='w-75' /> */}
                                        <Video srcv='/video/bhm.mp4' className='w-75' />

                                    </div>
                                    <div className="col-md-8">
                                        <div className="card course-content h-100 shadow-sm border-0">
                                            <div className="card-header bg-primary text-white py-3">
                                                <h3 className="card-title text-center mb-0">B.Sc in Hospitality and Hotel Administration</h3>
                                            </div>
                                            <div className="card-body">
                                                <p className="lead">The Bachelor of Science in Hospitality and Hotel Administration program prepares students for careers in the hospitality industry. It covers hotel operations, food and beverage management, front office procedures, housekeeping, and event management.</p>

                                                <div className="row mt-4">
                                                    <div className="col-md-12">
                                                        <h5 className="fw-bold"><i class="fas fa-concierge-bell me-2 text-primary"></i>Curriculum Highlights:</h5>
                                                        <div className="row mt-2">
                                                            <div className="col-md-6">
                                                                <ul className="course-features list-unstyled">
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />
                                                                        <li>Hotel Operations Management</li>


                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Food & Beverage Services</li>

                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Front Office Management</li>

                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Housekeeping Operations</li>


                                                                    </span>









                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <ul className="course-features list-unstyled">



                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />
                                                                        <li>Event Management</li>



                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Tourism Studies</li>


                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Hospitality Marketing</li>


                                                                    </span>
                                                                    <span className='d-flex text-black'>
                                                                        <AiOutlineCheck />

                                                                        <li>Hotel Accounting</li>


                                                                    </span>





                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-white border-0 text-end pt-0">
                                                <a href="#" class="btn btn-primary">Explore More <i className="fas fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* AnimatePresence for smooth transitions */}

                                </div>
                        }


                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};





export default CourceSection;

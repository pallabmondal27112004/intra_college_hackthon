
import React, { useState } from 'react';
import {
  FaLaptopCode, FaHospital, FaConciergeBell,
  FaClock, FaUsers, FaBriefcase, FaGraduationCap, FaHandshake, FaGlobe, FaUtensils, FaHotel,
  FaStar, FaStarHalfAlt, FaCheckCircle, FaArrowRight, FaFileDownload,
  FaDatabase, FaCode, FaChartLine, FaUserMd
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import '../contect/global.css'

import '../courceSection/courceSection.css';
import Video from './Video.jsx';
import '../courceSection/cource.js';
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('bca');

  const tabIcons = {
    bca: <FaLaptopCode />,
    bba: <FaHospital />,
    bhm: <FaConciergeBell />,
  };

  return (
    <section className="courses-section py-1 parallax-bg bg-white w-100" >
      <div className="pattern-overlay"></div>
      <div className="container position-relative">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Our <span className="text-primary">Courses</span></h2>
          <div className="section-divider"><span></span></div>
         
        </div>

        {/* Navigation Tabs */}
       
        <div className="course-nav-wrapper mb-3">
  <div className="courses-glow-bg"></div>
  <ul className="nav nav-pills course-nav justify-content-center gap-3 flex-wrap" role="tablist">
    {['bca', 'bba', 'bhm'].map(course => {
      const isActive = activeTab === course;

      return (
        <li className="nav-item" key={course}>
          <motion.button
            className={`nav-link border-0 rounded-3 px-4 py-2 d-flex flex-column align-items-center gap-1 ${
              isActive ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}
            onClick={() => setActiveTab(course)}
            type="button"
            role="tab"
            whileHover={{
              backgroundColor: '#0d6efd', // Bootstrap primary
              color: '#fff',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              boxShadow: isActive
                ? 'inset 0 0 10px rgba(255, 255, 255, 0.3)'
                : 'inset 0 0 8px rgba(0, 0, 0, 0.1)',
              minWidth: '100px',
              cursor: 'pointer',
            }}
          >
            <div className="course-nav-icon fs-4" >
              {tabIcons[course]}
            </div>
            <span
            className={`fw-bold text-uppercase  ${
                isActive ? 'bg-primary text-white' : 'bg-white text-primary'
              }`}
            
           >
              {course}
            </span>
          </motion.button>
        </li>
      );
    })}
  </ul>
</div>





        {/* Animated Content Tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="tab-content"
            id="courseTabContent"
          >
            {activeTab === 'bca' && <BCACourse />}
            {activeTab === 'bba' && <BBACourse />}
            {activeTab === 'bhm' && <BHMCourse />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Rating Stars Helper
const getRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const half = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) stars.push(<FaStar className='text-warning' key={`star-${i}`} />);
  if (half) stars.push(<FaStarHalfAlt className='text-warning' key="half" />);
  for (let i = stars.length; i < 5; i++) stars.push(<FaStar className='text-warning text-muted' key={`empty-${i}`}  />);

  return stars;
};

// Reusable Course Card
const CourseCard = ({ title, category, duration, level, rating, description, highlightsLeft, highlightsRight, features, floatingIcons , videoSrc}) => (
  <div className="course-card card-3d">
    <div className="row g-0">
      <div className="col-lg-5 course-image-container "
      style={{marginTop:'7rem'}}
      >
        {/* <div className="course-image">
          <div className="course-overlay">
            <div className="course-label">
              <span className="duration"><FaClock /> {duration}</span>
              <span className="level">{level}</span>
            </div>
          </div>
        </div> */}
        <Video srcv ={videoSrc}/>
        <div className="image-reflection"></div>
        <div className="course-3d-elements">
          {floatingIcons.map((Icon, index) => (
            <div className="floating-icon" key={index}>
              <Icon />
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-7 course-content-container">
        <div className="course-content">
          <div className="course-header">
            <div className=" fw-bold pb-3 text-primary">{category}</div>
            <h3 className="course-title pb-4">{title}</h3>
            <div className="course-rating">
              {getRatingStars(rating)}
              <span className="rating-count mx-2 mt-2">({rating}/5)</span>
            </div>
          </div>
          <div className="course-description">
            <p className='py-3'>{description}</p>
          </div>
          <div className="course-highlights">
            <h4>Program Highlights</h4>
            <div className="row ">
              <div className="col-md-6">
                <ul className="highlights-list list-unstyled d-flex flex-column gap-2  ">
                  {highlightsLeft.map((text, i) => (
                    <li key={i}><FaCheckCircle className='text-primary'/> {text}</li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="highlights-list list-unstyled d-flex flex-column gap-2   ">
                  {highlightsRight.map((text, i) => (
                    <li key={i}><FaCheckCircle  className='text-primary'/> {text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="course-features course-features-3d d-flex justify-content-evenly align-items-center flex-wrap gap-3">
  {features.map((feature, i) => (
    <motion.div
      key={i}
      className="text-black rounded-3 d-flex justify-content-evenly opacity-1 p-2"
      style={{ width: '150px', background: '#0c67f053', cursor: 'pointer' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.4, delay: i * 0.2 }}
    >
      <div
        className="feature-icon bg-primary rounded-circle d-flex justify-content-center align-items-center text-white"
        style={{ width: '30px', height: '30px' }}
      >
        {feature.icon}
      </div>
      <div className="feature-text ms-2">
        <h5 className="mb-0">{feature.value}</h5>
        <p className="mb-0">{feature.label}</p>
      </div>
    </motion.div>
  ))}
</div>

          <div className="course-action mt-4 d-flex justify-content-end align-items-center">
            <a href="#" className="btn btn-primary btn-lg rounded-pill neon-border">
              <span className='text-white'>Apply Now</span> <FaArrowRight className="ms-2" />
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg rounded-pill ms-2">
              <span>Download Brochure</span> <FaFileDownload className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Individual Course Components
const BCACourse = () => (
  <CourseCard
    title="Bachelor of Computer Applications"
    category="Computer Science"
    duration="3 Years"
    level="Undergraduate"
    rating={4.5}
    description="A comprehensive program focused on computer science, programming, and IT that prepares you for careers in technology and software development."
    highlightsLeft={["Programming for Problem Solving", "Digital Electronics Lab", "Internet & Web Programming"]}
    highlightsRight={["Python Programming", "DBMS Lab", "VTU Approved Syllabus"]}
    features={[
      { icon: <FaUsers />, label: "Seats", value: "60" },
      { icon: <FaBriefcase />, label: "Placement", value: "95%" },
      { icon: <FaGraduationCap />, label: "Approved", value: "AICTE" },
    ]}
    floatingIcons={[FaCode, FaDatabase, FaGlobe]}
    videoSrc='./video/bca.mp4'
  />
);

const BBACourse = () => (
  <CourseCard
    title="BBA in Hospital Management"
    category="Healthcare Management"
    duration="3 Years"
    level="Undergraduate"
    rating={5}
    description="A specialized program that equips students with business administration skills focused on healthcare settings and hospital operations."
    highlightsLeft={["Healthcare Management Principles", "Hospital Administration", "Healthcare Economics"]}
    highlightsRight={["Healthcare Marketing", "Patient Care Management", "Healthcare Laws and Ethics"]}
    features={[
      { icon: <FaUsers />, label: "Seats", value: "45" },
      { icon: <FaBriefcase />, label: "Placement", value: "90%" },
      { icon: <FaHandshake />, label: "Hospital Partners", value: "30+" },
    ]}
    floatingIcons={[FaHospital, FaChartLine, FaUserMd]}
    videoSrc='./video/bba.mp4'

  />
);

const BHMCourse = () => (
  <CourseCard
    title="B.Sc in Hospitality and Hotel Administration"
    category="Hospitality Management"
    duration="4 Years"
    level="Undergraduate"
    rating={4}
    description="A specialized program that prepares students for careers in the hospitality industry with a focus on hotel operations and management."
    highlightsLeft={["Food Production Operations", "Front Office Management", "Food & Beverage Service"]}
    highlightsRight={["Hospitality Marketing", "Hotel Engineering", "Event Management"]}
    features={[
      { icon: <FaUsers />, label: "Seats", value: "40" },
      { icon: <FaGlobe />, label: "Exposure", value: "International" },
      { icon: <FaBriefcase />, label: "Placement", value: "85%" },
    ]}
    floatingIcons={[FaHotel, FaUtensils, FaGlobe]}
    videoSrc='./video/bhm.mp4'

  />
);

export default CoursesSection;

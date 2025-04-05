// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "../sliderCaresole/caresole.css"; // Import custom CSS
// import slider from "../../../public/image/slider.png"; // Correct image import
// import placementslider from '../../../public/image/placementslider.jpeg'
// function CarouselSlider() {
//   return (
//     <Carousel controls={true} indicators={false} className="" style={{width:"100%"}}> 
//       <Carousel.Item interval={3000}>
//         <img className="d-block w-100" src={slider} alt="Slide 1" />
//       </Carousel.Item>

//       <Carousel.Item interval={3000}>
//         <img className="d-block w-100" src={placementslider} alt="Slide 2" />
//       </Carousel.Item>

//       <Carousel.Item interval={3000}>
//         <img className="d-block w-100" src={slider} alt="Slide 3" />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselSlider;


import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGraduationCap, FaUserPlus, FaLaptopCode, FaHospital, FaConciergeBell } from "react-icons/fa";
import '../sliderCaresole/caresole.css'
// We no longer need to import animate.css as we've added our own animation classes

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize bootstrap carousel on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Import Bootstrap's JavaScript if needed
      const bootstrapInit = async () => {
        try {
          // Check if Bootstrap is already available globally
          if (!window.bootstrap) {
            // If using Bootstrap 5 via npm, you might need to import it
            // This is a common approach when bootstrap is installed via npm
            const bootstrap = await import('bootstrap');
            window.bootstrap = bootstrap;
          }
          
          // Initialize the carousel
          const carousel = document.getElementById('heroSlider');
          if (carousel) {
            const bsCarousel = new window.bootstrap.Carousel(carousel, {
              interval: 6000,
              pause: 'hover',
              ride: 'carousel',
              wrap: true
            });
            
            // Set loaded state to trigger animations
            setIsLoaded(true);
          }
        } catch (error) {
          console.error("Error initializing carousel:", error);
        }
      };
      
      bootstrapInit();
    }
  }, []);

  return (
    <div className={`hero-banner-container w-100 ${isLoaded ? 'loaded' : ''}`}>
      <section className="hero-slider position-relative">
        <div className="animated-bg"></div>

        <div id="heroSlider" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#heroSlider"
                data-bs-slide-to={i}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="overlay"></div>
              <img src="/image/slider.png" className="d-block w-100" alt="College Slider 1" />
              <div className="carousel-caption d-flex h-100">
                <div className="container-fluid px-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 text-start">
                      <div className="content-wrapper animate__animated animate__fadeInLeft">
                        <span className="badge-modern">Admission Open 2025-26</span>
                        <h1 className="fw-bold display-4">
                          Your Journey to <span className="gradient-text">Expertise</span>
                        </h1>
                        <h2 className="fw-light mb-4">Starts Here</h2>
                        <p className="lead mb-4">Empower yourself with knowledge and skills for a successful future.</p>
                        <div className="d-flex gap-3">
                          <a href="#" className="btn btn-gradient btn-lg rounded-pill">
                            <span className="text-white">Explore Programs</span>
                            <FaArrowRight className="ms-2 text-white" />
                          </a>
                          <a href="#" className="btn btn-glass btn-lg rounded-pill">
                            <span className="text-white">Contact Us</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <div className="floating-image animate__animated animate__fadeInUp animate__delay-1s">
                        {/* <img src="/image/slider.png" alt="Floating" className="" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="overlay overlay-blue"></div>
              <img src="/image/placement.jpg  " className="d-block w-100" alt="College Slider 2" />
              <div className="carousel-caption d-flex h-100">
                <div className="container-fluid px-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 text-start">
                      <div className="content-wrapper animate__animated animate__fadeInUp">
                        <span className="badge-modern badge-success">AICTE Approved</span>
                        <h1 className="fw-bold display-4">
                          Excellence in <span className="gradient-text-blue">Education</span>
                        </h1>
                        <h2 className="fw-light mb-4">MAKAUT Affiliated Institute</h2>
                        <p className="lead mb-4">Our institute provides quality technical education with industry exposure.</p>
                        <div className="d-flex gap-3">
                          <a href="#" className="btn btn-warning btn-lg rounded-pill">
                            <span className="text-white">Admission Open</span>
                            <FaGraduationCap className="ms-2 text-white" />
                          </a>
                          <a href="#" className="btn btn-glass btn-lg rounded-pill">
                            <span className="text-white">Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <div className="stats-card animate__animated animate__fadeInRight animate__delay-1s">
                        <div className="stats-item">
                          <span className="counter">12</span>
                          <span className="stats-label">Years of Excellence</span>
                        </div>
                        <div className="stats-item">
                          <span className="counter text-white">95</span><span>%</span>
                          <span className="stats-label text-white">Placement Rate</span>
                        </div>
                        <div className="stats-item">
                          <span className="counter">50</span><span>+</span>
                          <span className="stats-label">Corporate Partners</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="overlay overlay-gradient"></div>
              <img src="/image/about2.jpeg" className="d-block w-100" alt="College Slider 3" />
              <div className="carousel-caption d-flex h-100">
                <div className="container-fluid px-4">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8 ms-auto text-start">
                      <div className="content-wrapper animate__animated animate__fadeInRight">
                        <span className="badge-modern badge-purple">Industry Focused</span>
                        <h1 className="fw-bold display-4">
                          Build Your <span className="gradient-text-purple">Future</span>
                        </h1>
                        <h2 className="fw-light mb-4">With Cutting-Edge Programs</h2>
                        <p className="lead mb-4">BBA in Hospital Management, BCA, B.Sc in Hospitality and more.</p>
                        <div className="d-flex gap-3">
                          <a href="#" className="btn btn-gradient-purple btn-lg rounded-pill">
                            <span className="text-white">Register Now</span>
                            <FaUserPlus className="ms-2 text-white" />
                          </a>
                          <a href="#" className="btn btn-glass btn-lg rounded-pill">
                            <span className="text-white">View Courses</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-5 d-none d-md-block">
                      <div className="course-cards animate__animated animate__fadeInLeft animate__delay-1s">
                        <div className="mini-card">
                          <div className="mini-card-icon"><FaLaptopCode /></div>
                          <h5>BCA</h5>
                        </div>
                        <div className="mini-card">
                          <div className="mini-card-icon"><FaHospital /></div>
                          <h5>BBA</h5>
                        </div>
                        <div className="mini-card">
                          <div className="mini-card-icon"><FaConciergeBell /></div>
                          <h5>B.Sc</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
            <div className="control-circle">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </div>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
            <div className="control-circle">
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </div>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;


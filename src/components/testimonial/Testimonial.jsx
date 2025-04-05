import React, { useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../testimonial/testimonial.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  
  const goToSlide = (index) => {
    if (carouselRef.current) {
      carouselRef.current.to(index);
      setActiveIndex(index);
    }
  };

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">What Our Students Say</span>
          <h2 className="section-title">Student <span className="text-primary">Testimonials</span></h2>
          <div className="section-divider">
            <span></span>
          </div>
          <p className="section-description mx-auto">Hear from our graduates about their experiences and success stories at CCLMS.</p>
        </div>
        
        <div className="testimonial-wrapper">
          <Carousel 
            id="testimonialCarousel" 
            indicators={false} 
            controls={true} 
            interval={5000}
            pause="hover"
            onSelect={handleSelect}
            ref={carouselRef}
            prevIcon={<div className="control-circle"><FaChevronLeft /></div>}
            nextIcon={<div className="control-circle"><FaChevronRight /></div>}
          >
            <Carousel.Item>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-text">My experience at CCLMS was exceptional. The faculty provided hands-on training and real-world projects that prepared me for my career in software development. The placement cell was very supportive and helped me secure a great job even before graduation.</p>
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/image/about1.jpeg" alt="Arpan Dowari" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Arpan Dowari</h4>
                    <p className="author-designation">BCA Graduate 2023</p>
                    <p className="author-company">Software Engineer at Tech Innovations</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-text">The BBA program at CCLMS provided me with a strong foundation in business administration. The industry connections helped me secure a management position right after graduation. The faculty members were always supportive and the practical approach to learning made complex concepts easy to understand.</p>
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/image/about2.jpeg" alt="Priya Patel" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Priya Patel</h4>
                    <p className="author-designation">BBA Graduate 2022</p>
                    <p className="author-company">Assistant Manager at Global Healthcare</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <FaQuoteLeft />
                  </div>
                  <p className="testimonial-text">The B.Sc. in Hospitality program at CCLMS was a life-changing experience for me. The practical training and internship opportunities helped me understand the industry better. I'm now working in a 5-star hotel, and I can confidently say that my education at CCLMS was the foundation of my success.</p>
                  <div className="testimonial-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="far" style={{ opacity: 0.5 }} />
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/image/about3.jpeg" alt="Pallab Mondal" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Pallab Mondal</h4>
                    <p className="author-designation">BHM Graduate 2022</p>
                    <p className="author-company">Front Office Manager at Luxury Hotels & Resorts</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          
          {/* Custom Indicators */}
          <div className="carousel-indicators">
            <button 
              type="button" 
              onClick={() => goToSlide(0)} 
              className={activeIndex === 0 ? "active" : ""}
              aria-label="Slide 1"
            ></button>
            <button 
              type="button" 
              onClick={() => goToSlide(1)} 
              className={activeIndex === 1 ? "active" : ""}
              aria-label="Slide 2"
            ></button>
            <button 
              type="button" 
              onClick={() => goToSlide(2)} 
              className={activeIndex === 2 ? "active" : ""}
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
        
        <div className="testimonial-footer text-center mt-5">
          <p className="testimonial-stats">
            <span className="stat-item"><strong>500+</strong> Graduates</span>
            <span className="stat-item"><strong>95%</strong> Placement Rate</span>
            <span className="stat-item"><strong>4.8/5</strong> Student Satisfaction</span>
          </p>
          <a href="#" className="btn btn-outline-primary rounded-pill mt-3">View All Success Stories</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
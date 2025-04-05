import React, { useEffect } from 'react';
import { FaGraduationCap, FaUsers, FaBriefcase, FaFlask, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../about/about.css'; // Make sure to adapt this CSS file or use Tailwind if preferred
import { FaUserGraduate } from "react-icons/fa";

const WelcomeSection = () => {
  useEffect(() => {
    // Import and initialize the WelcomeSection module
    import('../about/about.js').then(() => {
      // Access the global WelcomeSection object and initialize it
      if (window.WelcomeSection && typeof window.WelcomeSection.init === 'function') {
        window.WelcomeSection.init();
      } else {
        console.warn('WelcomeSection module not found or init method not available');
      }
    });
  }, []);

  return (
    <section className="welcome-section py-5 bg-white w-100">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">
            WELCOME TO <span className="text-primary">CCLMS</span>
          </h2>
          <div className="section-divider"><span></span></div>
        </div>

        <div className="row align-items-center g-5">
          {/* Image Cube Section */}
          <div className="col-lg-6">
            <div className="welcome-image position-relative depth-effect">
              <div className="scene">
                <div className="cube">
                  <div className="cube__face cube__face--front">
                    <img src='/image/about1.jpeg' alt="CCLMS Campus" className="img-fluid rounded-4 shadow-lg" />
                  </div>
                  <div className="cube__face cube__face--back">
                    <img src='/image/about2.jpeg' alt="CCLMS Facilities" className="img-fluid rounded-4 shadow-lg" />
                  </div>
                  <div className="cube__face cube__face--right">
                    <img src='/image/about3.jpeg' alt="CCLMS Students" className="img-fluid rounded-4 shadow-lg" />
                  </div>
                  <div className="cube__face cube__face--left">
                    <img src='/image/about4.jpeg' alt="CCLMS Classrooms" className="img-fluid rounded-4 shadow-lg" />
                  </div>
                </div>
              </div>
              <div className="floating-badge">
                <div className="badge-content">
                  <span className="badge-number text-white">12+</span>
                  <span className="badge-text text-white">Years of Excellence</span>
                </div>
              </div>
              <div className="image-overlay">
                <span className="overlay-text">Our Campus</span>
              </div>
              <div className="image-controls">
                <button className="control-btn prev-btn"><FaArrowLeft/></button>
                <button className="control-btn next-btn"><FaArrowRight/></button>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6">
            <div className="welcome-content card-3d">
              <div className="welcome-heading">
                <h3 className="mb-4 fw-bold text-with-shadow">
                  Empowering Futures Through <span className="text-primary neon-text">
                    Quality Education</span>
                </h3>
              </div>
              <p className="lead mb-4">
                The Institute of Learning and Management Sciences is affiliated to VTU and approved by AICTE with College Code – 4363.
              </p>
              <p className="mb-4">
                Since its inception, the institute has focused on imparting skill-based quality education. Our success is evident through our exceptional placement records with leading names in the industry.
              </p>

              {/* Features */}
              <div className="features-grid">
                <FeatureItem icon={<FaGraduationCap />} title="Quality Education" subtitle="AICTE approved programs" />
                <FeatureItem icon={<FaUsers />} title="Expert Faculty" subtitle="Experienced professionals" />
                <FeatureItem icon={<FaBriefcase />} title="95% Placements" subtitle="Industry connections" />
                <FeatureItem icon={<FaFlask />} title="Modern Facilities" subtitle="State-of-the-art campus" />
              </div>

              {/* Stats Row */}
              <div className="stats-row mt-5">
                <StatItem count={12} label="Years of Excellence" />
                <StatItem count={15} label="Experienced Faculty" />
                <StatItem count={500} label="Successful Graduates" />
              </div>

              {/* Call to Action */}
              <div className="welcome-cta mt-5">
                <a href="#" className="btn btn-primary btn-lg rounded-pill neon-border">
                  Discover More <FaArrowRight className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="feature-item glass-morph">
    {/* <div className="feature-icon text-primary">{icon}</div> */}
    <div className='feature-icon '>

{icon}
      </div>

    <div className="feature-text">
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  </div>
);

const StatItem = ({ count, label }) => (
  <div className="stat-counter">
    <div className="counter-value" data-count={count}>{count}</div>
    <div className="counter-label" dangerouslySetInnerHTML={{ __html: label.replace(/\n/g, '<br/>') }} />
  </div>
);

export default WelcomeSection;

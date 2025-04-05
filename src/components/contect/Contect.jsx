import React from 'react'
import '../contect/contect.css'
import '../contect/global.css'
import '../contect/contectjs.js'
import { FaPhoneAlt } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaUserGraduate, FaMobileAlt, FaGraduationCap, FaQuestionCircle, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';

const Contect = () => {
    return (
        <div className='bg-white w-100'>
            <section className="contact-section py-5">
                <div className="contact-bg-scene">
                    <div className="floating-shape shape1"></div>
                    <div className="floating-shape shape2"></div>
                    <div className="floating-shape shape3"></div>
                </div>
                <div className="container position-relative">
                    <div className="section-header text-center mb-5">
                        <span className="section-subtitle">Connect With Us</span>
                        <h2 className="section-title">Reach <span className="text-primary neon-text">Out</span></h2>
                        <div className="section-divider">
                            <span></span>
                        </div>
                        <p className="section-description mx-auto">Have questions about our programs? We're here to guide you through your educational journey. Our admissions team is ready to assist you.</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="contact-info-card card-3d">
                                <div className="card-glow"></div>
                                <div className="contact-header">
                                    <h3 className="mb-4">Contact Information</h3>
                                    <p className="lead">We're eager to connect with aspiring students and answer your questions!</p>
                                </div>

                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="info-content">
                                            <h5>Main Campus</h5>
                                            <p>Plot 23, College Campus Road, Knowledge Park, Electronic City Phase II, Bangalore - 560100</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="info-content">
                                            <h5>Admissions Hotline</h5>
                                            <p>+91 8044556677 / +91 9988776655</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <MdEmail />

                                        </div>
                                        <div className="info-content">
                                            <h5>Email Us</h5>
                                            <p>admissions@cclms.edu.in<br />info@cclms.edu.in</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <FaClock />
                                        </div>
                                        <div className="info-content">
                                            <h5>Office Hours</h5>
                                            <p>Weekdays: 8:30 AM - 5:30 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon-box">
                                            <FaVideo />
                                        </div>
                                        <div className="info-content">
                                            <h5>Virtual Campus Tour</h5>
                                            <p><a href="#" className="btn btn-sm btn-outline-primary rounded-pill mt-2">Take a Tour <i className="fas fa-external-link-alt ms-1"></i></a></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social">
                                    <h5>Connect With Us</h5>
                                    <div className="social-links">
                                        <a href="#" className="social-btn glass-morph"/>
                                        <i className='social-media'><FaFacebook /></i>
                                        <a href="#" className="social-btn glass-morph"/>
                                        <i className='social-media'><FaInstagramSquare /></i>
                                        <a href="#" className="social-btn glass-morph"/>
                                        <i className='social-media'><IoLogoYoutube /></i>
                                        <a href="#" className="social-btn glass-morph"/>
                                        <i className='social-media'><TbBrandLinkedinFilled /></i>
                                        <a href="#" className="social-btn glass-morph"/>
                                        <i className='social-media'><IoLogoWhatsapp /></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-7">
                            <div className="contact-form-card card-3d">
                                <div className="form-decoration-circle circle1"></div>
                                <div className="form-decoration-circle circle2"></div>
                                <h3 className="mb-4">Request Information</h3>
                                <p className="form-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
                                <form id="contactForm" className="contact-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <input type="text" className="form-control glass-input" id="name" placeholder="Your Name" required />
                                                <label htmlFor="name"><i className="fas fa-user-graduate me-2"></i>Full Name</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <input type="email" className="form-control glass-input" id="email" placeholder="Your Email" required />
                                                <label htmlFor="email">
                                                    
                                                    <MdEmail/> Email Address</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <input type="tel" className="form-control glass-input" id="phone" placeholder="Your Phone" required />
                                                <label htmlFor="phone"><i className="fas fa-mobile-alt me-2"></i>Mobile Number</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <select className="form-select glass-input" id="program" required>
                                                    <option selected disabled value="">Select Program</option>
                                                    <option value="bca">BCA - Computer Applications</option>
                                                    <option value="bba">BBA - Hospital Management</option>
                                                    <option value="bhm">BHM - Hotel Management</option>
                                                    <option value="other">Other Programs</option>
                                                </select>
                                                <label htmlFor="program"><i className="fas fa-graduation-cap me-2"></i>Program of Interest</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <select className="form-select glass-input" id="inquiry" required>
                                                    <option selected disabled value="">Select Type</option>
                                                    <option value="admission">Admission Process</option>
                                                    <option value="fees">Fee Structure</option>
                                                    <option value="scholarship">Scholarships</option>
                                                    <option value="campus">Campus Visit</option>
                                                    <option value="other">Other Inquiry</option>
                                                </select>
                                                <label htmlFor="inquiry"><i className="fas fa-question-circle me-2"></i>Inquiry Type</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating form-group depth-effect">
                                                <input type="text" className="form-control glass-input" id="city" placeholder="Your City" />
                                                <label htmlFor="city"><i className="fas fa-map-marker-alt me-2"></i>City</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating form-group depth-effect">
                                                <textarea
                                                    className="form-control glass-input"
                                                    id="message"
                                                    placeholder="Your Message"
                                                    style={{ height: "120px" }}
                                                />
                                                <label htmlFor="message"><i className="fas fa-comment-alt me-2"></i>Additional Information</label>
                                                <div className="input-focus-indicator"></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check form-group">
                                                <input className="form-check-input" type="checkbox" id="consent" required />
                                                <label className="form-check-label" htmlFor="consent">
                                                    I consent to receive information about CCLMS programs and agree to the <a href="#" className="privacy-link">privacy policy</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary btn-lg rounded-pill neon-border submit-btn">
                                                <span>Submit Request</span>
                                                <i className="fas fa-paper-plane ms-2"></i>
                                                <div className="btn-shine"></div>
                                            </button>
                                            <div className="form-status-indicator mt-3">
                                                <div className="spinner-border text-primary spinner-border-sm me-2 d-none" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                                <span className="status-text"></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                         <div className="col-lg-7">
      <div className="contact-form-card card-3d">
        <div className="form-decoration-circle circle1"></div>
        <div className="form-decoration-circle circle2"></div>
        <h3 className="mb-4">Request Information</h3>
        <p className="form-subtitle">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
        <form id="contactForm" className="contact-form">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <input type="text" className="form-control glass-input" id="name" placeholder="Your Name" required />
                <label htmlFor="name">
                  <FaUserGraduate className="me-2" /> Full Name
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <input type="email" className="form-control glass-input" id="email" placeholder="Your Email" required />
                <label htmlFor="email">
                  <MdEmail className="me-2" /> Email Address
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <input type="tel" className="form-control glass-input" id="phone" placeholder="Your Phone" required />
                <label htmlFor="phone">
                  <FaMobileAlt className="me-2" /> Mobile Number
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <select className="form-select glass-input" id="program" required>
                  <option selected disabled value="">
                    Select Program
                  </option>
                  <option value="bca">BCA - Computer Applications</option>
                  <option value="bba">BBA - Hospital Management</option>
                  <option value="bhm">BHM - Hotel Management</option>
                  <option value="other">Other Programs</option>
                </select>
                <label htmlFor="program">
                  <FaGraduationCap className="me-2" /> Program of Interest
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <select className="form-select glass-input" id="inquiry" required>
                  <option selected disabled value="">
                    Select Type
                  </option>
                  <option value="admission">Admission Process</option>
                  <option value="fees">Fee Structure</option>
                  <option value="scholarship">Scholarships</option>
                  <option value="campus">Campus Visit</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <label htmlFor="inquiry">
                  <FaQuestionCircle className="me-2" /> Inquiry Type
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating form-group depth-effect">
                <input type="text" className="form-control glass-input" id="city" placeholder="Your City" />
                <label htmlFor="city">
                  <FaMapMarkerAlt className="me-2" /> City
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating form-group depth-effect">
                <textarea
                  className="form-control glass-input"
                  id="message"
                  placeholder="Your Message"
                  style={{ height: "120px" }}
                />
                <label htmlFor="message">
                  <FaCommentAlt className="me-2" /> Additional Information
                </label>
                <div className="input-focus-indicator"></div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check form-group">
                <input className="form-check-input" type="checkbox" id="consent" required />
                <label className="form-check-label" htmlFor="consent">
                  I consent to receive information about CCLMS programs and agree to the{" "}
                  <a href="#" className="privacy-link">privacy policy</a>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill neon-border submit-btn">
                <span className='text-white'>Submit Request</span>
                <FaPaperPlane className="ms-2" />
                <div className="btn-shine"></div>
              </button>
              <div className="form-status-indicator mt-3">
                <div className="spinner-border text-primary spinner-border-sm me-2 d-none" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <span className="status-text"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>  
                    </div>

                    <div className="mt-5 pt-4">
                        <div className="map-container card-3d">
                            <div className="map-overlay"></div>

                            <iframe
                               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.8856329413134!2d87.73476217505369!3d21.784686880060512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326f87e6e8479%3A0xb610eefe9d9387c1!2sContai%20College%20of%20Learning%20%26%20Management%20Science!5e0!3m2!1sen!2sin!4v1743839424682!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contect

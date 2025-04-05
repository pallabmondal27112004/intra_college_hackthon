import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaChevronRight,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaArrowUp
} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {/* Footer */}
            <footer
                className="w-100 footer-section"
                style={{
                    backgroundImage: "url('/image/about3.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className="footer-bg-overlay"></div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Logo & About */}
                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <div className="footer-widget">
                                    <div className="footer-logo mb-4 ">
                                        <div className='bg-white rounded-circle ' style={{width:'70px', height:'70px'}}> 

                                        <img
                                            src="/image/logo.png"
                                            alt="CCLMS Logo"
                                            height="70"
                                            className="footer-logo-img"
                                        />
                                        </div>
                                    </div>
                                    <p>
                                        College of Learning & Management Sciences is a premier educational institution
                                        approved by AICTE and affiliated to VTU, offering quality education since 2011.
                                    </p>
                                    <div className="footer-social mt-4">
                                        <a href="#" className="social-icon" aria-label="Facebook">
                                            <FaFacebook className="text-white" />
                                        </a>
                                        <a href="#" className="social-icon" aria-label="Twitter">
                                            <FaTwitter className="text-white" />
                                        </a>
                                        <a href="#" className="social-icon" aria-label="Instagram">
                                            <FaInstagram className="text-white" />
                                        </a>
                                        <a href="#" className="social-icon" aria-label="LinkedIn">
                                            <FaLinkedin className="text-white" />
                                        </a>
                                        <a href="#" className="social-icon" aria-label="YouTube">
                                            <FaYoutube className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <ul className="footer-links">
                                        {[
                                            "Home",
                                            "About Us",
                                            "Courses",
                                            "Admissions",
                                            "Placements",
                                            "Contact"
                                        ].map((link, idx) => (
                                            <li key={idx}>
                                                <a href="#">
                                                    <FaChevronRight className="me-1 text-primary" /> {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Our Programs */}
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Our Programs</h4>
                                    <ul className="footer-links">
                                        {[
                                            "BCA - Computer Applications",
                                            "BBA - Hospital Management",
                                            "B.Sc - Hospitality & Hotel Administration",
                                            "Diploma Programs",
                                            "Certificate Courses"
                                        ].map((program, idx) => (
                                            <li key={idx}>
                                                <a href="#">
                                                    <FaChevronRight className="me-1 text-primary" /> {program}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <div className="footer-contact">
                                        <div className="contact-item d-flex">
                                            <div className='text-primary d-flex rounded-circle align-items-center justify-content-center' style={{ width: '70px ', height: '40px', background: 'rgba(10,110,253,.2)', backdropFilter: 'blur(5px)', boxShadow: '0 0 15px rgba(10, 110, 253,.3)' }}>

                                                <FaMapMarkerAlt className=" text-primary" />
                                            </div>
                                            <p>CCLMS Campus, University Road, Contai, West Bengal, India</p>
                                        </div>
                                        <div className="contact-item d-flex">
                                            <div className='text-primary d-flex rounded-circle align-items-center justify-content-center' style={{ width: '45px ', height: '40px', background: 'rgba(10,110,253,.2)', backdropFilter: 'blur(5px)', boxShadow: '0 0 15px rgba(10, 110, 253,.3)' }}>

                                                <FaPhoneAlt className=" text-primary" />
                                            </div>

                                            <p>07797147090 / 08373084200</p>
                                        </div>
                                        <div className="contact-item d-flex">
                                            <div className='text-primary d-flex rounded-circle align-items-center justify-content-center' style={{ width: '45px ', height: '40px', background: 'rgba(10,110,253,.2)', backdropFilter: 'blur(5px)', boxShadow: '0 0 15px rgba(10, 110, 253,.3)' }}>

                                                <FaEnvelope className=" text-primary" />
                                            </div>
                                            <p>admin@cclms.org</p>
                                        </div>
                                        <div className="contact-item d-flex">
                                        <div className='text-primary d-flex rounded-circle align-items-center justify-content-center' style={{ width: '45px ', height: '40px', background: 'rgba(10,110,253,.2)', backdropFilter: 'blur(5px)', boxShadow: '0 0 15px rgba(10, 110, 253,.3)' }}>

<FaClock className=" text-primary" />
</div>
                                            <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="newsletter-content text-center">
                                    <h3>Subscribe to our Newsletter</h3>
                                    <p>Stay updated with our latest news and events</p>
                                    <form className="newsletter-form mt-4">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                            />
                                            <button className="btn btn-primary" type="submit">
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <p className="mb-0">
                                    &copy; {new Date().getFullYear()} CCLMS. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top */}
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
                <FaArrowUp className="text-primary" />
            </button>
        </>
    );
};

export default Footer;

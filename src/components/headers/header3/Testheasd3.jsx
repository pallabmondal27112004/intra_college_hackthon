
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from '../../../../public/image/logo.png'
function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setIsSticky(window.scrollY > navbar.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fake Content for Scrolling */}
      <div className="h-[200px] flex items-center bg-gray-200">
        <motion.img
          src={logo}
          alt="Logo"
          className="w-20 h-20"
          animate={isSticky ? { x: 0 } : { x: "-100%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Navbar */}
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Animated Logo */}
          <motion.img
            src={logo}
            alt="Logo"
            className="w-12 h-12"
            animate={isSticky ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
          />

          {/* Navbar Links */}
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Home</a></li>
            <li><a href="#" className="text-gray-700">About</a></li>
            <li><a href="#" className="text-gray-700">Services</a></li>
            <li><a href="#" className="text-gray-700">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* More Fake Content for Scrolling */}
      <div className="h-[2000px] bg-gray-100"></div>
    </div>
  );
}

export default StickyNavbar
import React, { useState, useEffect } from "react";
import { FaImages } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import "../gallary/galerry.css";
import '../contect/global.css'
import '../gallary/gellery.js'

const galleryItems = [
  { src: "/image/about1.jpeg", alt: "Campus Building", title: "Main Building", category: "campus" },
  { src: "/image/about2.jpeg", alt: "Campus View", title: "Campus View", category: "campus" },
  { src: "/image/about3.jpeg", alt: "College Gate", title: "College Entrance", category: "events" },
  { src: "/image/about4.jpeg", alt: "College Activities", title: "College Activities", category: "events" },
  { src: "/image/bgImage1.jpeg", alt: "Campus Building", title: "College Building", category: "classroom" },
  { src: "/image/slider.png", alt: "College Infrastructure", title: "College Infrastructure", category: "classroom" },
  { src: "/image/placementslider.jpeg", alt: "Student Area", title: "Student Common Area", category: "students" },
  { src: "/image/modelbgimage.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery1.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery1.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery2.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery3.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery4.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery5.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery6.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery8.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery9.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery10.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
  { src: "/image/gellery11.jpeg", alt: "Student Activities", title: "Student Activities", category: "students" },
];

const categories = ["all", "campus", "events", "classroom", "students"];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="gallery-section py-5">
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <span className="section-subtitle">Our Campus</span>
            <h2 className="section-title">
              Explore CCLMS <span className="text-primary">Gallery</span>
            </h2>
            <div className="title-separator mx-auto"></div>
            <p className="lead">
              Glimpses of our state-of-the-art campus facilities, events, and student activities
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <motion.div className="row mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="col-12 text-center">
            <div className="gallery-filter">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  className={classNames("filter-btn", { active: activeCategory === cat })}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="row g-3 gallery-grid">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.src + idx}
                className="col-6 col-md-4 col-lg-3 gallery-item"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <div className="gallery-card">
                  <a href={item.src} className="glightbox" data-gallery={item.category}>
                    <img src={item.src} alt={item.alt} className="img-fluid rounded" />
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <h5>{item.title}</h5>
                        <span>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div className="row mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="col-12 text-center">
            <a href="#" className="btn btn-outline-primary rounded-pill">
              <FaImages className="me-2" />
              View More Photos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

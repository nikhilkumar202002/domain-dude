'use client';

import React, { useState, useEffect } from "react";
import "./ServicePageStyles.css";
import { motion, AnimatePresence } from "framer-motion";

const ServiceHero = () => {

    const keywords = [
        "Web Development",
        "UI/UX Designing",
        "Digital Marketing",
        "Branding",
        "Video Production",
        "Graphics Design",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [keywords.length]);

  return (
    <>
        <section className='service-hero'>
            <div className="service-hero-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="service-hero-header">
                    <h2 className='service-hero-sub-heading'>Our Digital Services</h2>
                    <h1 className='service-hero-heading'>Elevate your brand with{" "}
                        
                        <span className="highlight-wrapper">
                            <AnimatePresence mode="wait">
                                <motion.span className="service-hero-heading-highlight"
                                    key={keywords[currentIndex]}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-100%" }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15,
                                        bounce: 0.6,
                                        duration: 0.5,
                                    }}

                                >
                                    {keywords[currentIndex]}
                                </motion.span>
                            </AnimatePresence>
                            </span>
                        </h1>
                    <p className="service-hero-heading-description">
                        Transform your digital presence with our professional services designed
                        to drive measurable results.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default ServiceHero
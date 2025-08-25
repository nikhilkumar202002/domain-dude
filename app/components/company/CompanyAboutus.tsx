"use client";

import { Button } from '@radix-ui/themes'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import "./CompanyStyles.css"
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const CompanyAboutus = () => {
  return (
    
    <>
       <motion.section
      className="company-aboutus"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% of the section enters
    >
      <div className="company-aboutus-container container mx-auto h-full px-5 md:px-12 lg:px-24">
        <div className="company-aboutus-flex flex flex-col lg:flex-row gap-30 lg:gap-30">
          
          {/* LEFT CONTENT */}
          <motion.div
            className="company-aboutus-header flex-1 w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Heading */}
            <motion.h1 
              className="company-aboutus-heading"
              variants={fadeInUp}
            >
              Who <span className="company-aboutus-highlight">We</span> Are
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="company-aboutus-description"
              variants={fadeInUp}
            >
              We are not your typical digital agency — and we never wanted to be.
              We are a squad of dreamers, creators, and disruptors who believe that every brand has a story worth telling. From marketers who understand what makes audiences tick, to designers who breathe life into pixels, to growth hackers who see opportunities where others see obstacles — we are united by one mission: to make brands unforgettable.

              Our journey began in the vibrant city of Kochi, where creativity flows as freely as the backwaters. What started as a small team with big ambitions quickly grew into a global force, helping businesses across continents break barriers and dominate the digital space.

              For us, it is not just about marketing — it is about building experiences, crafting impactful visuals, and creating strategies that spark growth. We dont just follow trends; we set them. We dont just deliver results; we transform brands into stories people love.
            </motion.p>
         

            {/* Button */}
            <motion.div variants={fadeInUp}>
              <Button className="company-aboutus-cta flex items-center gap-3">
                Reach Us Now <GoArrowUpRight />
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            className="company-aboutus-video flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <video
              src="/Video/aboutus-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default CompanyAboutus
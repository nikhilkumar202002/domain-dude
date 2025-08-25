"use client";
import React from 'react'
import "./CompanyStyles.css"
import "@fontsource/dm-sans";
import "@fontsource/montserrat";
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import { FiArrowUpRight } from "react-icons/fi";
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


const CompanyHero = () => {
  return (
    <>
        <section className="company-hero">
      <div className="company-hero-container container mx-auto h-full px-5 md:px-12 lg:px-24">
        
        <motion.div 
          className="company-hero-header"
          initial="hidden"
          animate="visible"
          variants={container}
        >

          <motion.h1 
            className='company-hero-heading flex items-center gap-3'
            variants={fadeInUp}
          >
            Hey Dudes!
            <span className='company-hero-heading-highlight'>
              <Image src="./Icons/marketing.svg" alt='Domain Dude' height={39} width={39}/>
            </span>
            We Make Brands Unstoppable!
          </motion.h1>

          <motion.h1 
            className='company-hero-heading company-hero-heading-mobile flex items-center'
            variants={fadeInUp}
          >
            Hey Dudes!
            <span className='company-hero-heading-highlight'>
              <Image src="./Icons/marketing.svg" alt='Domain Dude' height={39} width={39}/>
            </span>
          
            <p>We Make Brands Unstoppable!</p>
          </motion.h1>

          <motion.p 
            className='company-hero-description'
            variants={fadeInUp}
          >
            We blend creativity, strategy, and tech to make your business go BOOM!
          </motion.p>

          <motion.div 
            className="company-hero-btns flex gap-3"
            variants={fadeInUp}
          >
            <Button className='company-hero-btn-first flex gap-2 items-center'>
              Lets Grow Together <FiArrowUpRight/>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default CompanyHero
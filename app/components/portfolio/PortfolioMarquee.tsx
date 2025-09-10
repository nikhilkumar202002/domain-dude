'use client'
import React from 'react'
import { BsDiamondFill } from "react-icons/bs";

const PortfolioMarquee = () => {
    const portfolioItems = [
    "Designs That Speak Louder Than Words",
    "Turning Ideas Into Stunning Visuals",
    "Crafting Experiences, Not Just Interfaces",
    "Where Creativity Meets Functionality",
    "Designs That Inspire & Engage",
    "Building Digital Identities That Last",
    "Every Pixel Tells a Story",
    "Transforming Concepts Into Reality",
    "Bold Designs. Smart Solutions.",
    "Creating Meaningful User Experiences",
    "Design That Drives Growth",
    "Your Brand, Our Creative Canvas",
    "Innovative Designs for Modern Brands",
    "From Vision to Visual Perfection",
    "Showcasing Creativity Without Limits"
    ];
  
    return (
      <>
          <section className='portfolio-marquee'>
              <div className="portfolio-marquee-wrapper">
                  <div className="portfolio-marquee-track">
           
                  {[...portfolioItems, ...portfolioItems].map((item, index) => (
                      <span key={index} className="portfolio-marquee-item">
                      {item}
                      <BsDiamondFill className="portfolio-marquee-icon" />
                      </span>
                  ))}
                  </div>
              </div>
          </section>
    </>
  )
}

export default PortfolioMarquee
"use client";
import React from 'react'
import { BsDiamondFill } from "react-icons/bs";

const CompanyMarquee = () => {

     const items = [
    "Digital Brilliance Unleashed",
    "Ideas That Get People Talking",
    "Where Innovation Exists",
    "Crafting Brands for Tomorrow",
    "Creativity Without Boundaries",
    "Transforming Clicks Into Connections",
    "Make Your Brand Shine Online",
    "Strategies That Work, Designs That Wow",
    "Elevate Your Digital Presence",
    "Building Brands with Passion",
    "Be Where the World Is Going",
    "Results You Can Measure",
    "Unleashing Creative Power",
    "Innovation. Impact. Growth.",
    "Empowering Your Digital Journey",
  ];

  return (
    <>
        <section className='company-marquee'>
            <div className="company-marquee-wrapper">
                <div className="company-marquee-track">
         
                {[...items, ...items].map((item, index) => (
                    <span key={index} className="company-marquee-item">
                    {item}
                    <BsDiamondFill className="company-marquee-icon" />
                    </span>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default CompanyMarquee
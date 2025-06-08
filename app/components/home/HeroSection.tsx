'use client'

import React, { useEffect, useState } from 'react'
import * as Container from '@radix-ui/react-slot';
import "./Homepagestyle.css"

const HeroSection = () => {

    const keywords = [
        "Future Leaders.", "Innovators.", "Disruptors.", "Visionaries.", "Changemakers.", "Pioneers.",
    ]

    const [currentKeyword, setCurrentKeyword] = useState(0);
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeyword(prev => (prev + 1) % keywords.length);
            setBounce(true);

            setTimeout(() => setBounce(false), 500);
        },5000)

        return () => clearInterval(interval);
    }, []); 

  return (
    <>
        <section className='home-banner'>
            <Container.Slot className="container mx-auto px-4">
                <div className="home-container w-full px-5 md:px-12 lg:px-24">
                    <div className="home-banner-content">
                        <h1 className='home-banner-heading'>Global digital marketing<br></br>agency your creative partner<br></br>for <span 
                        className={`keyword-span ${bounce ? 'bounce' : ''}`}>{keywords[currentKeyword]}</span></h1>
                    </div>
                </div>
            </Container.Slot>
          
        </section>
    </>
  )
}

export default HeroSection
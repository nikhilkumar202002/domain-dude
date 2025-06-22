'use client'
import React from 'react'
import * as Container from '@radix-ui/react-slot';
import './Homepagestyle.css'

const AboutSection = () => {
  return (
    <>
        <section className='about-section'>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="about-container">
                    
                    <div className="about-heading-content">
                        <h1>Driven by passion — by <span className='about-heading-content-bold'>strategy,</span> Domain Dude is your partner in building <span className='about-sentence-image'><img src="/2817.jpg" alt="" /></span> <span className='about-heading-content-bold'>bold brands</span> and <span className='about-sentence-image'><img src="/2817.jpg" alt="" /></span><span className='about-heading-content-bold'>impactful digital experiences.</span></h1>
                    </div>

                    <div className="about-description-container flex justify-between">
                        <div className="about-counter-container flex gap-20">
                            <div className="about-counter-card">
                                <h1>1250+</h1>
                                <p>Project Completed</p>
                            </div>
                              <div className="about-counter-card">
                                <h1>50k+</h1>
                                <p>Satisfied Client</p>
                            </div>
                              <div className="about-counter-card">
                                <h1>12+</h1>
                                <p>Year of Experience</p>
                            </div>
                        </div>
                        

                        <div className="about-descriiption-content max-w-xl">
                            <p>Welcome to Domain Dude, your comprehensive digital agency specializing in crafting impactful online experiences through web development, design, and strategic marketing. We partner with businesses of all sizes to build bold brands and drive measurable growth in the digital landscape.</p>
                        </div>
                    </div>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default AboutSection
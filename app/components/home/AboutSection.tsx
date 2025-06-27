'use client'
import React from 'react'
import * as Container from '@radix-ui/react-slot';
import './Homepagestyle.css'
import Image from 'next/image';

const AboutSection = () => {
  return (
    <>
        <section className='about-section'>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="about-container grid grid-cols-1 md:grid-cols-2 gap-30">
                    <div className="about-container-image w-full flex justify-center">
                        <div className="about-inner-image">
                            <Image src="/About-image.jpg" width={1080} alt='about image' height={0}/>
                        </div>
                        <div className="about-image-round-animation">
                            
                        </div>
                    </div>

                    <div className="about-container-content">
                        <div className="about-container-header">
                            <h1>Driven by passion — by <span className='about-heading-content-bold'>strategy,</span> Domain Dude is your partner in building <span className='about-heading-content-bold'>bold brands</span> and <span className='about-heading-content-bold'>impactful digital experiences.</span></h1>
                        </div>
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
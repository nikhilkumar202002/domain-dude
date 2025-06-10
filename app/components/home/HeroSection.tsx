'use client'

import React, { useEffect, useState } from 'react'
import * as Container from '@radix-ui/react-slot';
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram,FaFacebook,FaLinkedin } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import CountUp from 'react-countup';
import "./Homepagestyle.css"
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

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
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="hero-flex-container flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                    <div className="home-container w-full lg:w-[60%">
                        <div className="home-banner-content">
                            <h1 className='home-banner-heading'>Global digital marketing<br></br>agency your creative<br></br>partner for <span 
                            className={`keyword-span ${bounce ? 'bounce' : ''}`}>{keywords[currentKeyword]}</span></h1>
                        </div>
                        <div className="home-banner-btns flex flex-wrap gap-3 mt-10">
                            <Button className='hero-banner-btn-one flex items-center gap-2'>Request a Strategy Call<span><MdArrowOutward/></span></Button>
                            <Button className='hero-banner-btn-two flex items-center gap-2'>Explore Our Services<span><MdArrowOutward/></span></Button>
                        </div>
                        <div className="home-banner-trustpartner flex items-center">
                            <div className="home-banner-expertise">
                            <p><span><CountUp end={12} duration={2} />+</span> Years of Expertise.</p>
                            </div>
                            <div className="home-banner-social">
                                <ul className='home-banner-social-list flex items-center'>
                                    <li><Link href=""><FaInstagram /></Link></li>
                                    <li><Link href=""><FaFacebook /></Link></li>
                                    <li><Link href=""><FaLinkedin /></Link></li>
                                    <li><Link href=""><FaBehance /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="hero-banner-review w-full lg:w-[40%]">
                        <div className="hero-banner-description">
                            <p>Elevate your brand with Domain Dude: cutting-edge digital agency services for web development, AI-powered marketing, and immersive UI/UX design.</p>
                        </div>
                        <div className="hero-banner-reviews-container flex items-center">
                            <div className="hero-banner-review-card flex items-center gap-2">
                                <div className="hero-review-profile">
                                    <img src="/avatar-1.jpg" alt="" className='avatar'/>
                                    <img src="/avatar-2.jpg" alt="" className='avatar'/>
                                    <img src="/avatar-3.jpg" alt="" className='avatar'/>
                                </div>
                                <div className="hero-review-content">
                                    <p><span><CountUp end={50} duration={2} />+</span>Trusted<br></br> Partners.</p>
                                </div>
                            </div>

                            <div className="hero-banner-googlereview flex gap-2">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google">
                                <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                                <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                                <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                                <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
                                </svg></span>
                                <p className='google-reviews-content flex items-center'>1000+ Google<br></br>Reviews</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
             
            </Container.Slot>
          
        </section>
    </>
  )
}

export default HeroSection
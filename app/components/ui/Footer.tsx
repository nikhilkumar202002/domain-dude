'use client'

import { Button } from '@radix-ui/themes'
import { MdArrowOutward } from "react-icons/md";
import React from 'react'
import './headerfooter.css';
import { FaInstagram,FaFacebookF,FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <footer className='main-footer py-10'>
            <video
        className="footer-video-bg"
        src="/footer-bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="footer-video-overlay"></div>
      <div className="footer-content ">
        <div className="footer-container w-full px-5 md:px-12 lg:px-24">
             <div className="footer-subscribe flex justify-between items-center">
                <div className="footer-subscribe-text">
                    <h1 className="footer-subscribe-heading">Join Our Digital Circle!</h1>
                    <p className='footer-subscribe-content'>Get the latest updates, tips, and offers. No spam—only value.</p>
                </div>
                <div className="footer-subscribe-form">
                    <form action="" method="post">
                        <div className='footer-fields flex '>
                            <input type="text" placeholder='Your Email'/>
                            <Button className='subscribe-btn flex items-center gap-2'>Subcribe Now <span><MdArrowOutward/></span></Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer-menu-container grid grid-cols-12 gap-8 mt-12">
                <div className="footer-logo col-span-12 md:col-span-6">
                    <img src="/LOGO-WHITE.png" alt="" />
                    <p className='footer-about-content'>Domain Dude delivers innovative web, design, and marketing solutions that help brands grow, engage, and stand out in the digital world.</p>
                    <div className="footer-social-icons">
                        <h1>Follow Us On</h1>
                        <ul>
                            <li><Link href="/"><FaInstagram /></Link></li>
                            <li><Link href="/"><FaFacebookF /></Link></li>
                            <li><Link href="/"><FaLinkedinIn /></Link></li>
                            <li><Link href="/"><FaXTwitter /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-menu-list col-span-6 sm:col-span-4 md:col-span-2">
                    <ul>
                        <li>Company</li>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/company">Our Team</Link></li>
                        <li><Link href="/service">Careers</Link></li>
                        <li><Link href="/portfolio">Blog</Link></li>
                        <li><Link href="/portfolio">Press & Media</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-menu-list col-span-6 sm:col-span-4 md:col-span-2">
                    <ul>
                        <li>Services</li>
                        <li><Link href="/">Web Development</Link></li>
                        <li><Link href="/company">UI/UX Design</Link></li>
                        <li><Link href="/service">Digital Marketing</Link></li>
                        <li><Link href="/portfolio">Branding</Link></li>
                        <li><Link href="/contact">Video Production</Link></li>
                        <li><Link href="/contact">Graphics Design</Link></li>
                    </ul>

                       <ul>
                        <li>Resources</li>
                        <li><Link href="/">Case Studies</Link></li>
                        <li><Link href="/company">Portfolio</Link></li>
                        <li><Link href="/service">FAQs</Link></li>
                        <li><Link href="/portfolio">Client Testimonials</Link></li>
                        <li><Link href="/contact">Download Brochure</Link></li>
                    </ul>
                </div>

                <div className="footer-menu-list col-span-6 sm:col-span-4 md:col-span-2">
                    <ul>
                        <li>Legal</li>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/company">Terms & Conditions</Link></li>
                        <li><Link href="/service">Refund Policy</Link></li>
                        <li><Link href="/portfolio">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
      </div>
      </div>
           
        </footer>
    </>
  )
}

export default Footer
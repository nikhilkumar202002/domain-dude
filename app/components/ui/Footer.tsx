'use client'

import { Button } from '@radix-ui/themes'
import { MdArrowOutward } from "react-icons/md";
import React from 'react'
import './headerfooter.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='main-footer py-10 relative'>
        <video
          className="footer-video-bg"
          src="/Video/call-to-action-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="footer-video-overlay"></div>
        {/* Responsive container */}
        <div className="container mx-auto relative z-10">
          <div className="footer-content w-full px-5 md:px-12 lg:px-24">
           
            <div className="footer-menu-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mt-8 ">
              <div className="footer-logo md:col-span-1">
                <Image src="/main-logo.png" width={100} height={0} alt="Domain Dude Logo" />
                <p className='footer-about-content'>Domain Dude delivers innovative web, design, and marketing solutions that help brands grow, engage, and stand out in the digital world.</p>
                <div className="footer-social-icons">
                  <h1>Follow Us On</h1>
                  <ul className="flex gap-4 mt-2">
                    <li><Link href="/"><FaInstagram /></Link></li>
                    <li><Link href="/"><FaFacebookF /></Link></li>
                    <li><Link href="/"><FaLinkedinIn /></Link></li>
                    <li><Link href="/"><FaXTwitter /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="footer-menu-list">
                <ul>
                  <li className="font-bold mb-2">Company</li>
                  <li><Link href="/">About Us</Link></li>
                  <li><Link href="/company">Our Team</Link></li>
                  <li><Link href="/service">Careers</Link></li>
                  <li><Link href="/portfolio">Blog</Link></li>
                  <li><Link href="/portfolio">Press & Media</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="footer-menu-list">
                <ul>
                  <li className="font-bold mb-2">Services</li>
                  <li><Link href="/">Web Development</Link></li>
                  <li><Link href="/company">UI/UX Design</Link></li>
                  <li><Link href="/service">Digital Marketing</Link></li>
                  <li><Link href="/portfolio">Branding</Link></li>
                  <li><Link href="/contact">Video Production</Link></li>
                  <li><Link href="/contact">Graphics Design</Link></li>
                </ul>          
              </div>
               <div className="footer-menu-list">
                <ul>
                  <li className="font-bold mb-2">Resources</li>
                  <li><Link href="/">Case Studies</Link></li>
                  <li><Link href="/company">Portfolio</Link></li>
                  <li><Link href="/service">FAQs</Link></li>
                  <li><Link href="/portfolio">Client Testimonials</Link></li>
                  <li><Link href="/contact">Download Brochure</Link></li>
                </ul>      
              </div>
              <div className="footer-menu-list">
                <ul>
                  <li className="font-bold mb-2">Legal</li>
                  <li><Link href="/">Privacy Policy</Link></li>
                  <li><Link href="/company">Terms & Conditions</Link></li>
                  <li><Link href="/service">Refund Policy</Link></li>
                  <li><Link href="/portfolio">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright-container mt-8">
              <div className="footer-copyright-content">
                <p className='flex items-center gap-2 text-white'>
                  <span><MdCopyright /></span>
                  {new Date().getFullYear()} Domain Dude. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

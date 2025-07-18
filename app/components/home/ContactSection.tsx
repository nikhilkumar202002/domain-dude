'use client';
import React, { useEffect, useRef } from 'react';
import "./ContactSection.css"
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { Button } from '@radix-ui/themes';
import { RiMailSendFill } from "react-icons/ri";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const formRef = useRef(null);
    const contactContentRef = useRef(null);

     useEffect(() => {
    const ctx = gsap.context(() => {

        // Animate each word in heading
    gsap.from('.heading-word', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
   
  });
      // Section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
        },
      });
      

      // Form slide-in
      gsap.from(formRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 95%',
        },
      });

      // Left column content fade in
      gsap.from(contactContentRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactContentRef.current,
          start: 'top 95%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
          <section className='contact-section' ref={sectionRef}>
      <div className="contact-container container mx-auto h-full px-5 md:px-12 lg:px-24">
        <div className="contact-row flex flex-col lg:flex-row w-full gap-x-15 ">
          <div className="contact-col w-full lg:w-1/2" ref={contactContentRef}>
            <div className="contact-content">
              <h4>We’re Here to Help You</h4>
              <h1 ref={headingRef}>
                {`Let's Build Something Bold, Beautiful, and Digital`.split(' ').map((word, index) => (
                    <span key={index} className="heading-word inline-block mr-2">{word}</span>
                ))}
                </h1>
              <p>At <strong>Domain Dude</strong>, we don't just build websites—we craft digital experiences that connect, inspire, and convert. Whether you're a startup or a seasoned brand, our team is here to turn your ideas into powerful online realities.</p>
              <div className="contact-details flex items-center gap-3 mt-4">
                <div className="contact-details-icon"><BiSolidPhoneCall/></div>
                <div className="contact-details-details"><p>Call Now:</p> <br />+91 77360 16507</div>
              </div>
              <div className="contact-details flex items-center gap-3 mt-4">
                <div className="contact-details-icon"><TbMailFilled/></div>
                <div className="contact-details-details"><p>Mail Us:</p> <br />domaindude2025@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="contact-col w-full lg:w-1/2 mt-10 lg:mt-0" ref={formRef}>
            <div className="contact-form">
              <form>
                <div className="contact-form-row flex gap-2">
                  <div className="contact-form-col w-full md:w-1/2">
                    <label>Name</label><br/>
                    <input type='text' placeholder='Vinitha P T' className="w-full"/>
                  </div>
                  <div className="contact-form-col w-full md:w-1/2">
                    <label>Company Name</label><br/>
                    <input placeholder='Domain Dude' className="w-full"/>
                  </div>
                </div>

                <div className="contact-form-row mt-2">
                  <label>Phone Number</label><br/>
                  <input type='text' placeholder='1234567890'/>
                </div>

                <div className="contact-form-row mt-2">
                  <label>Email</label><br/>
                  <input type='text' placeholder='domaindude@gmail.com'/>
                </div>

                <div className="contact-form-row mt-2">
                  <label>Select Service</label><br/>
                  <select>
                    <option>Select your service</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing</option>
                    <option>Branding</option>
                    <option>Video Production</option>
                    <option>Graphics Design</option>
                  </select>    
                </div>

                <div className="contact-form-row mt-2">
                  <label>Message</label><br/>
                  <textarea rows={5} placeholder='Hello'></textarea>
                </div>

                <Button className='contact-form-btn flex items-center gap-2 mt-4'>Submit <RiMailSendFill/></Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactSection
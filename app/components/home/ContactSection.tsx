import React from 'react'
import "./ContactSection.css"
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { Button } from '@radix-ui/themes';
import { RiMailSendFill } from "react-icons/ri";


const ContactSection = () => {
  return (
    <>
        <section className='contact-section'>
            <div className="contact-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="contact-row flex flex-col lg:flex-row w-full gap-x-15 ">
                    <div className="contact-col w-full lg:w-1/2">
                        <div className="contact-content">
                            <h4>We’re Here to Help You</h4>
                            <h1>Let's <span>Build Something</span> Bold, Beautiful, and Digital</h1>
                            <p>At <strong>Domain Dude</strong>, we don't just build websites—we craft digital experiences that connect, inspire, and convert. Whether you're a startup or a seasoned brand, our team is here to turn your ideas into powerful online realities.</p>

                            <div className="contact-details flex items-center gap-3 mt-4">
                                <div className="contact-details-icon"><BiSolidPhoneCall/></div>
                                <div className="contact-details-details"><p>Call Now:</p> <br />+91 77360 16507</div>
                            </div>

                            <div className="contact-details contact-details flex items-center gap-3 mt-4">
                                <div className="contact-details-icon"><TbMailFilled/></div>
                                <div className="contact-details-details"><p>Mail Us:</p> <br />domaindude2025@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-col w-full lg:w-1/2 mt-10 lg:mt-0">
                        <div className="contact-form">
                            <form action="">
                                <div className="contact-form-row flex gap-2">
                                    <div className="contact-form-col w-full md:w-1/2">
                                        <label htmlFor="">Name</label><br/>
                                        <input type='text' placeholder='Vinitha P T' className="w-full"/>
                                    </div>
                                    <div className="contact-form-col w-full md:w-1/2">
                                        <label htmlFor="">Company Name</label><br/>
                                        <input placeholder='Domain Dude' className="w-full"/>
                                    </div>
                                </div>

                                <div className="contact-form-row mt-2">
                                    <label htmlFor="">Phone Number</label><br/>
                                    <input type='text' placeholder='1234567890'/>
                                </div>

                                 <div className="contact-form-row mt-2">
                                    <label htmlFor="">Email</label><br/>
                                    <input type='text' placeholder='domaindude@gmail.com'/>
                                </div>

                                <div className="contact-form-row mt-2">
                                        
                                        <label htmlFor="">Select Service</label><br/>
                                        <select name="" id="">
                                            <option value="">Select your service</option>
                                            <option value="">Web Development</option>
                                            <option value="">UI/UX Design</option>
                                            <option value="">Digital Marketing</option>
                                            <option value="">Branding</option>
                                            <option value="">Video Production</option>
                                            <option value="">Graphics Design</option>
                                        </select>    
                                </div>

                                  <div className="contact-form-row mt-2">
                                        <label htmlFor="">Message</label><br/>
                                        <textarea rows={5} name="" id="" placeholder='Hello'></textarea>
                                </div>

                                <Button className='contact-form-btn flex items-center gap-2'>Submit <RiMailSendFill/></Button>
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
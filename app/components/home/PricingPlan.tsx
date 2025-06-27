import React from 'react'
import "./PricingPlan.css"
import * as Container from '@radix-ui/react-slot';
import { FiArrowUpRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from '@radix-ui/themes';

const PricingPlan = () => {
  return (
    <>
        <section className="pricing-plan-section">
            <Container.Slot className='mx-auto h-full px-5 md:px-12 lg:px-24'>
                <div className="pricing-plan-container">
                    <div className="pricing-header">
                        <div className="pricing-left-heading">
                            <h4>Pricing & Plan</h4>
                            <h1>Transparent Pricing for Powerful<br></br> Digital Solutions</h1>
                        </div>

                        <div className="pricing-plan-tabs flex gap-2">
                            <Button className='pricing-plan-tab'>Monthly</Button>
                            <Button className='pricing-plan-tab tab-2'>Yearly</Button>
                        </div>
                    </div>

                    <div className="pricing-plan-card-wrapper">
                       

                        <div className="pricing-plan-card"> 
                            <div className="price-card-header">
                                <h5>Basic Plan</h5>
                                <h1><span className='plan-price-icon'>₹</span> 8,000 <span className='price-month-bar'>/ Month</span></h1>
                                <p>Personal websites, portfolios, or small businesses starting online</p>
                            </div>
                            <div className="price-card-details relative">
                                <Button className='price-card-btn gap-2 flex items-center absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    Get Started <FiArrowUpRight/>
                                </Button>
                                <div className="price-card-content">
                                    <ul>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Up to 5 Pages</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Mobile-Responsive Design</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />WordPress or Static HTML/CSS</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Basic Contact Form</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Social Media Integration</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />SEO-Friendly Structure</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />15 Days Post-Launch Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                         <div className="pricing-plan-card premium-plan-card">
                            <div className="price-card-header premium-plan-header">
                                <h5>Premium Plan</h5>
                                <h1><span className='plan-price-icon premium-plan-icon'>₹</span> 22,000 <span className='price-month-bar premium-plan-bar'>/ Month</span></h1>
                                <p>E-commerce, advanced websites, and brand-focused builds Includes</p>
                            </div>
                            <div className="price-card-details relative">
                                <Button className='price-card-btn premium-plan-btn gap-2 flex items-center absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    Start Premium <FiArrowUpRight/>
                                </Button>
                                <div className="price-card-content">
                                    <ul>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Unlimited Pages</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Next.js / React.js or Advanced WordPress</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />E-Commerce Integration (or Shopify Customization)</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Admin Dashboard (Optional)</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Speed Optimization</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Premium Security & SEO Tools</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Google Analytics Setup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-plan-card relative ">
                            <div className="price-card-header">
                                <h5>Standard Plan</h5>
                                <h1><span className='plan-price-icon'>₹</span> 14,000 <span className='price-month-bar'>/ Month</span></h1>
                                <p>Growing businesses, service providers, professionals Includes</p>
                            </div>
                            <div className="price-card-details relative">
                                <Button className='price-card-btn standard-plan-btn gap-2 flex items-center absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                    Choose Plan <FiArrowUpRight/>
                                </Button>
                                <div className="price-card-content">
                                    <ul>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Up to 10 Pages</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Custom UI Design (Figma/Figma to Code)</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Developed in WordPress / React.js</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Blog or News Section</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Basic Animations</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />On-Page SEO</li>
                                        <li className='flex gap-1 items-center'><FaCircleCheck />Domain + Hosting Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </Container.Slot>
        </section>
    </>
  )
}

export default PricingPlan
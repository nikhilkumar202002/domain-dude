import React, { useEffect, useState } from 'react'
import "./EmpoweringBrands.css";

const EmpoweringBrands = () => {

     const keywords = [
            "Experiences", "Strategies", "Solutions"
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
        <section className="empowering-brands">
          <div className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="three-card-header">
                    <h4 className='three-card-sub-heading'>Creative. Scalable. Impactful.</h4>
                    <h1 className="three-card-heading">Digital <span 
                    className={`card-gradient-text ${bounce ? 'bounce' : ''}`}>{keywords[currentKeyword]}</span> That Drive Growth</h1>
                </div>

                {/* card design */}

                <div className="three-card-wrapper grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="three-card card-one col-span-1">
                        
                        <div className="three-cards-header">
                            <h4 className='three-cards-subheading'>For Agencies</h4>
                            <h1 className='three-cards-heading'>Your Trusted Development & Tech Partner</h1>
                        </div>

                        <div className="three-cards-bottom">
                            <p className='three-cards-description'>We work as your backend tech team—offering expert development, server management, and mentorship support for seamless delivery.</p>
                            <div className="three-cards-tags">
                                <div className="tags">
                                    Development
                                </div>

                                <div className="tags">
                                    Technical Mentorship
                                </div>

                                <div className="tags">
                                    Server Management
                                </div>

                                <div className="tags">
                                    Scalable Solutions
                                </div>

                                  <div className="tags">
                                    Team Extension
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="three-card card-two col-span-1">
                        <div className="three-cards-header">
                            <h4 className='three-cards-subheading'>For Digital Marketing Teams</h4>
                            <h1 className='three-cards-heading'>Boost Campaigns with Tech, Design & AI Power</h1>
                        </div>

                        <div className="three-cards-bottom">
                            <p className='three-cards-description'>From new website builds to SEO, server support, and AI-driven creatives—we empower marketers to drive traffic and conversions.</p>
                            <div className="three-cards-tags">
                                <div className="tags">
                                    SEO
                                </div>

                                <div className="tags">
                                    Web Development
                                </div>

                                <div className="tags">
                                    Creative Designs
                                </div>

                                <div className="tags">
                                    AI Content
                                </div>

                                  <div className="tags">
                                    Server Maintenance
                                </div>

                                 <div className="tags">
                                    Funnel Ready
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="three-card card-three col-span-1">
                        <div className="three-cards-header">
                            <h4 className='three-cards-subheading'>For Direct Clients</h4>
                            <h1 className='three-cards-heading'>All-in-One Digital Growth Solutions</h1>
                        </div>

                        <div className="three-cards-bottom">
                            <p className='three-cards-description'>We help you grow online with SEO, digital marketing, stunning websites, graphics, and blazing-fast dedicated servers.</p>
                            <div className="three-cards-tags">
                                <div className="tags">
                                    Digital Marketing
                                </div>

                                <div className="tags">
                                    SEO Services
                                </div>

                                <div className="tags">
                                    Website Development
                                </div>

                                <div className="tags">
                                    Graphic Design
                                </div>

                                  <div className="tags">
                                    Dedicated Hosting
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default EmpoweringBrands
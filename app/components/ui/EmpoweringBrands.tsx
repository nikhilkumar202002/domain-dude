import React from 'react'
import "./EmpoweringBrands.css"
import Image from 'next/image'

const EmpoweringBrands = () => {
  return (
    <>
        <section className="bento-grid-section">
            <div className="bento-grid-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="bento-grid-header">
                    <h4>Creative. Scalable. Impactfull</h4>
                    <h1>Digital <span className='bento-highlight'>Strategies</span> That Drive Growth</h1>
                </div>

                <div className="bento-grid-wrapper">
                    <div className="bento-grid-row flex flex-col md:flex-row w-full gap-5">
                        <div className="bento-grid-col w-full md:basis-2/5">
                            <div className="bento-grid-card">
                                <div className="bento-grid-card-content">
                                    <h4>For Agencies</h4>
                                    <h1>Your Trusted Development & Tech Partner</h1>
                                    <p>We work as your backend tech team—offering expert development, server management, and mentorship support for seamless delivery.</p>

                                    <div className="bento-grid-card-category">
                                        <ul>
                                            <li>Development</li>
                                            <li>Technical Mentorship</li>
                                            <li>Server Management</li>
                                            <li>Scalable Solutions</li>
                                            <li>Team Extension</li>
                                        </ul>
                                    </div>

                                    <div className="bento-grid-card-vector">
                                        <Image src="/Images/for-agencies.png" width={400} height={0} alt="for agencies"/>
                                    </div>
                                </div>
                            </div>

                        </div>

                         <div className="bento-grid-col w-full md:basis-3/5">
                            <div className="bento-grid-card">
                                <div className="bento-grid-card-content bento-grid-card-content-big">
                                    <h4>For Digital Marketing Teams</h4>
                                    <h1>Boost Campaigns with Tech, Design & AI Power</h1>
                                    <p>From new website builds to SEO, server support, and AI-driven creatives—we empower marketers to drive traffic and conversions.</p>

                                    <div className="bento-grid-card-category">
                                        <ul>
                                            <li>SEO</li>
                                            <li>Web Development</li>
                                            <li>Creative Designs</li>
                                            <li>AI Content</li>
                                            <li>Server Maintenance</li>
                                            <li>Funnel Ready</li>
                                        </ul>
                                    </div>

                                    <div className="bento-grid-card-vector">
                                        <Image src="/Images/For Digital Marketing Teams.png" width={420} height={0} alt="for agencies"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bento-grid-row flex flex-col md:flex-row w-full gap-5 my-5">
                        <div className="bento-grid-col w-full md:basis-3/5">
                            <div className="bento-grid-card">
                                <div className="bento-grid-card-content bento-grid-card-content-big">
                                    <h4>For Academy</h4>
                                    <h1>All-in-One Academic Success Solutions</h1>
                                    <p>We help you excel academically with expert tutoring, personalized learning plans, engaging resources, and comprehensive academic support—all backed by dedicated educators.</p>

                                    <div className="bento-grid-card-category">
                                        <ul>
                                            <li>Tutoring Services</li>
                                            <li>Personalized Study Plans</li>
                                            <li>Course Development</li>
                                            <li>Resource Creation</li>
                                            <li>Exam Preparation</li>
                                        </ul>
                                    </div>

                                    <div className="bento-grid-card-vector">
                                        <Image src="/Images/For Academy.png" width={390} height={0} alt="for agencies"/>
                                    </div>
                                </div>
                            </div>

                        </div>

                         <div className="bento-grid-col w-full md:basis-2/5">
                            <div className="bento-grid-card">
                                <div className="bento-grid-card-content ">
                                    <h4>For Direct Clients</h4>
                                    <h1>All-in-One Digital Growth Solutions</h1>
                                    <p>We help you grow online with SEO, digital marketing, stunning websites, graphics, and blazing-fast dedicated servers.</p>

                                    <div className="bento-grid-card-category">
                                        <ul>
                                            <li>Digital Marketing</li>
                                            <li>SEO Services</li>
                                            <li>Website Development</li>
                                            <li>Graphic Design</li>
                                            <li>Dedicated Hosting</li>
                                        </ul>
                                    </div>

                                    <div className="bento-grid-card-vector">
                                        <Image src="/Images/For Direct Clients.png" width={350} height={0} alt="for agencies"/>
                                    </div>
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
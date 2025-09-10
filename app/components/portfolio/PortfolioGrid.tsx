import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const PortfolioGrid = () => {
  return (
    <>
        <section className='portfolio-section'>
            <div className="portfolio-grid container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="portfolio-wrapper grid grid-cols-2 gap-6">
                    
                        <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/ayursidhi.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                         <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/lab-8.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                         <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/paddle-boat.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                         <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/pantry-india.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                         <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/thebridgate.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                        <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/vismaya.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>

                         <div className="portfolio-card">
                            <div className="portfolio-image">
                                <Image src="../../Portfolio/portfoliopage/yana.webp" alt='Portfolio' width={1500} height={0}/>
                            </div>

                            <div className="portfolio-image-header">
                                <h1 className='portfolio-image-heading'>Ayursiddhi - Wellness Ayurcedic Centre</h1>
                                <span className='portfolio-image-icon'><MdArrowOutward/></span>
                            </div>
                        </div>
                   
                </div>
            </div>
        </section>
    </>
  )
}

export default PortfolioGrid
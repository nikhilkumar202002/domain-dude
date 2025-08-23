import React from 'react'
import "./CompanyStyles.css"
import "@fontsource/dm-sans";
import "@fontsource/montserrat";


const CompanyHero = () => {
  return (
    <>
        <section className="company-hero">
            <div className="company-hero-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="company-hero-header grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 px-6 md:px-10 lg:px-20 py-12">
                    <div className="company-hero-left">
                        <h1 className='company-hero-heading'>Hey <span className='company-hero-heading-highlight'>Dude!</span></h1>
                    </div>

                    <div className="company-hero-right">
                        <p className='company-hero-description'>Welcome to Domain Dude — your digital playground where creativity, code, and strategy collide! Based in Kochi, Kerala, we are not your typical digital marketing agency. We are the team of digital rebels who love building brands that shine, websites that convert, and campaigns that trend.

                        Whether you want to launch a killer website, create scroll-stopping designs, or make your brand viral, we have got you covered. At Domain Dude, we dont just deliver services — we craft digital experiences.</p>
                    </div>
                </div>
            </div>

            <div className="company-hero-image">
                <div className="company-hero-bg">
                    <div className="company-hero-image-content container mx-auto h-full px-5 md:px-12 lg:px-24">
                        <h1>What Makes Us Different?</h1>
                        <p>We don’t just follow trends. We set them. Our approach is simple: listen, create, launch, and win. Every pixel we design, every campaign we run, and every video we produce has one goal — making your brand unforgettable.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CompanyHero
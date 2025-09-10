"use client";

import React from "react";
import "@fontsource/dm-sans";
import "@fontsource/montserrat";
import "./PortfolioStyles.css";

const PortfolioHero = () => {
  return (
    <>
        <section className='portfolio-hero'>
            <div className="portfolio-hero-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="portfolio-hero-header">
                    <h2 className='portfolio-hero-sub-heading'>Our Digital Portfolios</h2>
                    <h1 className='portfolio-hero-heading'>Where <span className="portfolio-hero-heading-highlight">Creativity Meets</span> Impact</h1>
                    <p className="portfolio-hero-description">
                        We craft unforgettable digital experiences that transform brands into stories people love. From strategy to design, we create, innovate, and inspire growth.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default PortfolioHero
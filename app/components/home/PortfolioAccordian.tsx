import React from 'react'
import "./PortfolioAccordion.css";
import * as Container from '@radix-ui/react-slot';
import { Button } from '@radix-ui/themes';

const PortfolioAccordian = () => {
  return (
    <>
        <section className='portfolio-main'>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="portfolio-container-header flex justify-content-between items-start">
                    <div className="portfolio-header-left">
                        <h1>Explore Our Portfolio of Powerful Digital Solutions</h1>
                    </div>
                    <div className="portfolio-header-right">
                        <p>From web design and branding to marketing and media, discover how we help brands grow through strategy, creativity, and tech.</p>
                        <Button>View Our Work</Button>
                    </div>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default PortfolioAccordian
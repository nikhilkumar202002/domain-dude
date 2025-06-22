import * as Container from '@radix-ui/react-slot';
import React from 'react'
import TechSlider from '../ui/TechSlider';

const TechnologySlider = () => {
  return (
    <>
        <section className='tech-main-hero'>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="tech-container">
                    <div className="tech-container-heading">
                        <h4>Technologies We Use to Build Your Brand</h4>
                        <h1>We combine creative tools & modern technologies to Design, Develop, & Promote impactful brands.</h1>
                    </div>

                    <div className="tech-container-image-wrapper">
                        <TechSlider/>
                    </div>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default TechnologySlider
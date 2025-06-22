import * as Container from '@radix-ui/react-slot';
import React from 'react'

const TechnologySlider = () => {
  return (
    <>
        <section className='tech-main-hero'>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="tech-container">
                    <div className="tech-container-heading">
                        <h4>Technologies We Use to Build Your Brand</h4>
                        <h1>We combine creative tools and modern technologies to design, develop, and promote impactful brands.</h1>
                    </div>

                    <div className="tech-container-image-wrapper">
                        <div className="tech-images">
                            
                        </div>
                    </div>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default TechnologySlider
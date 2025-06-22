import React from 'react';
import * as Container from '@radix-ui/react-slot';
import "./Homepagestyle.css";
import TechSlider from '../ui/TechSlider';

const HeroVideo = () => {
  return (
    <>
    
            <div className="hero-video-client-section">
                <Container.Slot className='container mx-auto h-full px-5 md:px-12 lg:px-24'>
                    <TechSlider/>
                </Container.Slot>
                <div className="hero-video">
                    <video src="/Video/hero-video.mp4" autoPlay muted loop></video>
                </div>
            </div>
    </>
  )
}

export default HeroVideo
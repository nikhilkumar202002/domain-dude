import React from 'react'
import * as Container from '@radix-ui/react-slot';
import { Button } from '@radix-ui/themes';

const CalltoAction = () => {
  return (
    <>
        <section className='call-action-section'>
               <video src="/Video/call-to-action-video.mp4" className="call-action-video absolute w-full h-full object-cover z-[-1]" autoPlay muted loop></video>
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="call-action-content">
                    <h4 className='call-action-heading'>Ready to Build Something Incredible?</h4>
                    <h1 className='call-action-description'>Let’s turn your ideas into a high-performing website and impactful brand. Whether it’s a simple site or a full-scale digital presence, we’re here to bring your vision to life.</h1>
                    <Button className='call-action-btn'>Let’s Work Together</Button>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default CalltoAction
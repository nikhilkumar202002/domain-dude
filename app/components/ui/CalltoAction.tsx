import React from 'react'
import * as Container from '@radix-ui/react-slot';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from "react-icons/md";
import "./Calltoaction.css"

const CalltoAction = () => {
  return (
    <>
        <section className='call-action-section'>
               <video src="/Video/call-to-action-video.mp4" className="call-action-video absolute w-full h-full object-cover z-[-1]" autoPlay muted loop></video>
            <Container.Slot className=" mx-auto h-full">
                <div className="call-action-content">
                    <h4 className='call-action-heading'>Ready to Build Something Incredible?</h4>
                    <div className="call-action-description-wrapper">
                      <h1 className="call-action-description">
                        Let’s turn your ideas into a powerful website and brand — from simple sites to full digital experiences.
                      </h1>
                    </div>
                    <Button className='call-action-btn flex items-center gap-2'>Let’s Work Together <MdArrowOutward/></Button>
                </div>
            </Container.Slot>
        </section>
    </>
  )
}

export default CalltoAction
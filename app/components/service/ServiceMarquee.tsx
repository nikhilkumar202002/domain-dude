"use client";
import React from 'react'
import { BsDiamondFill } from "react-icons/bs";

const ServiceMarquee = () => {

    const items = [
        "Building Modern, High-Performance Websites",
        "Designs That Deliver Exceptional User Experiences",
        "Boosting Brands Through Digital Marketing Strategies",
        "Creating Identities That Inspire and Connect",
        "Crafting Stunning Visual Stories Through Video",
        "Transforming Ideas Into Powerful Visual Designs",
        "Driving Business Growth Through Smart Web Solutions",
        "Turning Creativity Into Digital Excellence",
        "Designing Experiences That Convert Visitors Into Clients",
        "Amplifying Your Brand Across Digital Platforms",
        "Innovative Branding That Makes You Unforgettable",
        "Marketing Campaigns That Drive Real Results",
        "Engaging Videos That Capture Every Story",
        "Graphics That Speak Louder Than Words",
        "Complete Digital Solutions Tailored for Your Success",
        ];

    return (

        <>
            <section className='service-marquee'>
                <div className="service-marquee-wrapper">
                    <div className="service-marquee-track">

                        {[...items, ...items].map((item, index) => (
                            <span key={index} className="service-marquee-item">
                                {item}
                                <BsDiamondFill className="service-marquee-icon" />
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceMarquee
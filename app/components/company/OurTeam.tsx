"use client";

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  { name: "Nikhil Kumar S", position: "Creative Head", img: "./Team/nikhil.jpg" },
  { name: "Jasmin H", position: "Lead Web Developer", img: "./Team/jasmin.jpg" },
  { name: "Jose George", position: "Digital Marketing", img: "./Team/jose.jpg" },
  { name: "Jinson", position: "Lead Cyber Security", img: "./Team/jinson.jpg" },
];


const OurTeam = () => {

  return (
    <>
        <section className="our-team">
            <div className="our-team-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="our-team-header">
                    <h1 className='our-team-heading'><span className='our-team-heading-highlight'>Our Squad</span>, Your Growth Partners</h1>
                    <p className='our-team-description'>A passionate squad of creators, strategists, and innovators driving brands to shine in the digital world.</p>
                </div>
       {/* Swiper Carousel */}
        <Swiper
         modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1, // Mobile
            },
            640: {
              slidesPerView: 2, // Small tablets
            },
            768: {
              slidesPerView: 3, // Tablets / small laptops
            },
            1024: {
              slidesPerView: 4, // Desktops
            },
          }}
          className="our-team-swiper pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="our-team-card rounded-2xl overflow-hidden shadow-lg relative group">
                <div className="our-team-card-image">
                  <Image
                    width={400}
                    height={400}
                    alt={member.name}
                    src={member.img}
                    className="object-cover w-full h-80"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>
                <div className="our-team-card-content absolute bottom-4 left-4 text-white">
                  <h1 className="our-team-card-heading font-bold text-lg">
                    {member.name}
                  </h1>
                  <h4 className="our-team-card-position text-green-400">
                    {member.position}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
            </div>
        </section>
    </>
  )
}

export default OurTeam
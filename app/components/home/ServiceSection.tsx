'use client';

import React from 'react';
import { Button } from '@radix-ui/themes';
import './Homepagestyle.css';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';
import { BsArrowReturnRight } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const services = [
  {
    title: 'Web Development',
    items: ['Responsive Website Design', 'Custom Web Development', 'E-Commerce Solutions'],
  },
  {
    title: 'Digital Marketing',
    items: ['SEO & SEM Strategies', 'Social Media Campaigns', 'Lead Generation'],
  },
  {
    title: 'UI/UX Designing',
    items: ['User-Centered Design', 'Wireframes & Prototypes', 'App & Web UI Design'],
  },
  {
    title: 'Graphics Designing',
    items: ['Logo & Branding Design', 'Marketing Collaterals', 'Social Media Creatives'],
  },
  {
    title: 'Content Strategy',
    items: ['Content Planning', 'Copywriting Services', 'SEO Content Creation'],
  },
  {
    title: 'Brand Consulting',
    items: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines'],
  },
];

const ServiceSection = () => {
  return (
    <motion.section
      className="service-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="container mx-auto h-full px-5 md:px-12 lg:px-24">
        <div className="serice-container">
          {/* Heading Animation */}
          <motion.div
            className="service-header flex justify-between items-end"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
            }}
          >
            <div className="service-left-heading">
              <h1>Our Digital Services</h1>
              <p>
                Web, design, marketing, and branding solutions to elevate your business online.
              </p>
            </div>
            <div className="service-right-btn">
              <div className="service-arrow-btns flex gap-3">
                <Button className="service-swiper-prev custom-swiper-nav service-arrow-btns">
                  <IoIosArrowRoundBack />
                </Button>
                <Button className="service-swiper-next custom-swiper-nav service-arrow-btns">
                  <IoIosArrowRoundForward />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Swiper Animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' } },
            }}
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              loop={true}
              navigation={{
                nextEl: '.service-swiper-next',
                prevEl: '.service-swiper-prev',
              }}
              modules={[Navigation]}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-card">
                    <motion.h1
                      className="service-card-heading"
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: -5, opacity: 1 },
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {service.title.split(' ')[0]}
                      <br />
                      {service.title.split(' ')[1]}
                    </motion.h1>

                    <ul className="service-card-keywords">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span>
                            <BsArrowReturnRight />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="font-inter flex items-center service-btn-link">
                      <Link
                        href="/service"
                        className="group flex items-center gap-2 no-underline border-b transition-all duration-300 cursor-pointer relative"
                      >
                        Enquire Now
                        <span className="service-btn-arrow flex items-center rounded-full transition-transform duration-300 group-hover:rotate-45">
                          <GoArrowUpRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;

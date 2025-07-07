import React, { useRef } from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
  {
    name: 'Anita Varma',
    role: 'Founder, CraftLeaf Naturals',
    image: '/avatar-1.jpg',
    review: 'Domain Dude revamped our entire website with an intuitive UX and blazing-fast performance. Our bounce rate dropped by 40%, and conversions doubled!',
  },
  {
    name: 'Rahul Menon',
    role: 'CTO, FinEdge',
    image: '/avatar-2.jpg',
    review: 'They understood our brand deeply and turned it into a clean, scalable digital product. Highly recommend for startups and enterprises alike.',
  },
  {
    name: 'Sarah Lee',
    role: 'CMO, GlowUp Cosmetics',
    image: '/avatar-3.jpg',
    review: 'SEO traffic skyrocketed after Domain Dude took over. They’re the only agency we trust with digital growth.',
  },
  {
    name: 'Mohit Sharma',
    role: 'Founder, EventNext',
    image: '/avatar-1.jpg',
    review: 'From website creation to digital campaigns, everything was smooth and timely. 10/10 service and creativity.',
  },
  {
    name: 'Jessica Rao',
    role: 'VP Marketing, HomeSync',
    image: '/avatar-2.jpg',
    review: 'Our product launch was flawless thanks to Domain Dude. The design and branding made us look like a million-dollar company.',
  },
  {
    name: 'Nikhil Das',
    role: 'Co-Founder, Learnify',
    image: '/avatar-3.jpg',
    review: 'We saw a 3X boost in lead generation after switching to Domain Dude. Their digital marketing is unmatched.',
  },
];

const TestimonialSlider = ({ reverse = false }) => {

    const swiperRef = useRef(null);
    const continuousScrollSpeed = 5000;
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
<div className="relative overflow-hidden my-3">
      {/* Gradient Overlays for fade effect at edges */}
      <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true} // Enable infinite looping
          speed={continuousScrollSpeed} // Controls the animation speed for the continuous loop
          autoplay={{
            delay: 1, // Minimal delay for a truly continuous, ticker-tape-like effect
            disableOnInteraction: false, // Autoplay continues even if user interacts
            reverseDirection: reverse, // Controls the direction of autoplay
          }}
          slidesPerView="auto" // Allows each slide to have its own defined width
          spaceBetween={15} // Space between slides
          freeMode={true} // Essential for continuous, non-snapping movement
          grabCursor={false} // Disable grab cursor
          allowTouchMove={false} 
          modules={[Autoplay]}
          className="testimonial-wrapper-one"
        >
          {duplicatedTestimonials.map((t, index) => (
            <SwiperSlide
              key={`${t.name}-${index}`}
              style={{
                width: '320px', 
              }}
            >
              <div className="testimonial-card h-full flex flex-col justify-between bg-white p-4 rounded shadow">
                <div className="testimonial-card-header">
                  <div className="testimonials-star flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="testimonial-content mt-2">
                    <p className="line-clamp-3 text-gray-700 text-sm leading-relaxed">
                      {t.review}
                    </p>
                  </div>
                  <div className="testimonial-profile flex items-center gap-3 mt-4">
                    <Image
                      src={t.image}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      alt="profile"
                    />
                    <div className="testimonial-profile-name">
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonial-section py-12">
      <div className="testimonial-container container mx-auto px-5 md:px-12 lg:px-24">
        <div className="testimonial-header flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="testimonial-left">
            <h1 className="testimonial-heading text-3xl font-bold leading-tight">
              What Our <br />
              <span className="testimonial-light-heading text-primary">Clients Are Saying</span>
            </h1>
          </div>
          <div className="testimonial-right md:max-w-md text-gray-600">
            <p className="testimonial-subheadline text-base">
              Startups and enterprises choose Domain Dude for expert web design, branding, and digital marketing that drives real results. See what our happy clients say.
            </p>
          </div>
        </div>
      </div>

      {/* Slider 1: Left to Right */}
      <TestimonialSlider reverse={false} />

      {/* Slider 2: Right to Left */}
      <TestimonialSlider reverse={true} />
    </section>
  );
};

export default Testimonials;

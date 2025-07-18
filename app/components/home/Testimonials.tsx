'use client';

import React, { useRef, useEffect } from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { motion, Variants, useAnimation,useInView,useScroll } from 'framer-motion';


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

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: delay => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' }
  })
};

const MotionSlider: React.FC<{ reverse?: boolean; delay?: number }> = ({
  reverse = false,
  delay = 0,
}) => {
  const swiperRef = React.useRef<SwiperClass | null>(null);
  const continuousScrollSpeed = 5000;
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <motion.div
      variants={itemVariant}
      custom={delay}
      className="relative overflow-hidden my-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          loop
          speed={continuousScrollSpeed}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: reverse,
          }}
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          grabCursor={false}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="testimonial-wrapper-one"
        >
          {duplicated.map((t, i) => (
            <SwiperSlide key={`${t.name}-${i}`} style={{ width: '320px' }}>
              <div className="testimonial-card h-full flex flex-col justify-between bg-white p-4 rounded shadow">
                <div className="testimonial-card-header">
                  <div className="testimonials-star flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, x) => (
                      <FaStar key={x} />
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
                      alt={t.name}
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
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { amount: 0.3 });
  const { scrollY } = useScroll();
  const prevY = useRef(0);

  // only run animation when scrolling downward into view
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      const isScrollingDown = latest > prevY.current;
      prevY.current = latest;

      if (inView && isScrollingDown) {
        controls.start('visible');
      }
    });
  }, [inView, controls, scrollY]);

  return (
    <motion.section
      className="testimonial-section"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariant}
    >
      <div className="testimonial-container container mx-auto px-5 md:px-12 lg:px-24 text-center">
        <motion.h1
          className="testimonial-heading mb-2"
          variants={itemVariant}
          custom={0}
        >
          What Our Clients Are Saying
        </motion.h1>
        <motion.p
          className="testimonial-subheadline mb-8 text-gray-600"
          variants={itemVariant}
          custom={0.1}
        >
          <span className="testimonial-hightlight">Trusted</span> for Design & Marketing.
        </motion.p>

        {/* two sliders, each staggered */}
        <MotionSlider reverse={false} delay={0.2} />
        <MotionSlider reverse={true}  delay={0.5} />
      </div>
    </motion.section>
  );
};

export default Testimonials;

'use client';
import React, { useEffect, useRef } from 'react';
import './AboutSection.css';
import { Button } from '@radix-ui/themes';
import { GoArrowUpRight } from 'react-icons/go';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const wrapperRef = useRef(null);
  const splitRef = useRef(null);
  const tlRef = useRef(null);

useEffect(() => {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(SplitText, ScrollTrigger);

  ScrollTrigger.matchMedia({
    // MOBILE: ≤480px — just fade the entire H1 from grey→black
    "(max-width: 480px)": () => {
      // ensure your CSS sets the initial color:
      // .about-text-wrapper h1 { color: #888888; }
      return gsap.to(wrapperRef.current, {
        color: "#1D1616",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "+=100%",
          scrub: true,
        },
      });
    },

    // TABLET+ (481px and up) — do the char‑split animation
    "(min-width: 481px)": () => {
      const split = new SplitText(wrapperRef.current, { type: "chars" });
      gsap.set(split.chars, { color: "#888888" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(split.chars, {
        color: "#1D1616",
        stagger: 0.02,
        ease: "none",
      });

      return () => {
        tl.kill();
        split.revert();
      };
    },
  });

  // clean up all ScrollTriggers on unmount
  return () => ScrollTrigger.clearMatchMedia();
}, []);


  return (
    <section className="about-section">
      <div className="about-container container mx-auto h-full px-5 md:px-12 lg:px-24">
        <div className="about-text-wrapper" ref={wrapperRef}>
          <h1 className="white">
            Meet Domain Dude—your creative powerhouse and digital growth partner.
            We transform brands through stunning web development, impactful marketing,
            and standout design, helping your business unlock new possibilities in the
            digital world. Let's build something unforgettable together.
          </h1>
        </div>

        <div className="about-btn flex flex-wrap gap-3 justify-center">
          <Button className="flex items-center gap-2">
            More About Us <GoArrowUpRight />
          </Button>
          <Button className="about-second-btn flex items-center gap-2">
            See Our Works <GoArrowUpRight />
          </Button>
        </div>

        <div className="about-counter flex flex-wrap gap-[15px]">
          <div className="about-counters w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
            <h1>
              <CountUp end={300} duration={4} /> +
            </h1>
            <p>Happy Clients</p>
          </div>
          <div className="about-counters w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
            <h1>
              <CountUp end={1000} duration={4} /> +
            </h1>
            <p>Projects Delivered</p>
          </div>
          <div className="about-counters w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
            <h1>
              <CountUp end={12} duration={4} /> +
            </h1>
            <p>Years of Experience</p>
          </div>
          <div className="about-counters w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
            <h1>
              <CountUp end={20} duration={4} /> +
            </h1>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

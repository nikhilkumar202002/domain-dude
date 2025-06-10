'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './MarqueeSlider.module.css';

const keywords = [
  'Web Development',
  'Digital Marketing',
  'UI/UX Designing',
  'Graphics Designing',
  'Video Production',
  'Branding',
  'Online Experiences',
  'Strategic Growth',
  'Creative Solutions',
  'Bold Branding',
  'Digital Innovation',
  'Visual Storytelling',
  'Engaging Design',
  'Measurable Results',
  'Intuitive Websites',
  'Striking Visuals',
  'Design with Purpose',
  'Creative & Strategic Partner',
  'Impactful Campaigns',
  'Code Meets Creativity',
];

export default function MarqueeSlider() {
  const wrapperRef = useRef(null);
  const timelineRef = useRef(null);
  const currentSpeed = useRef(1); 
  const targetSpeed = useRef(1); 

  useEffect(() => {
    const wrapper = wrapperRef.current;

    // Duplicate items
    const fullText = [...keywords, ...keywords];

    wrapper.innerHTML = '';
    fullText.forEach((text, i) => {
      const span = document.createElement('span');
      span.className = styles.marqueeItem;
      span.textContent = text;
      wrapper.appendChild(span);
    });

    const totalWidth = wrapper.scrollWidth / 2;

    // Create GSAP timeline
    timelineRef.current = gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 60,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    // Update speed smoothly
    const update = () => {
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * 0.1;
      timelineRef.current.timeScale(currentSpeed.current);
      requestAnimationFrame(update);
    };

    update();

    // Wheel listener
    const handleWheel = (e) => {
      const delta = e.deltaY * 0.002; 
      targetSpeed.current = gsap.utils.clamp(-3, 3, currentSpeed.current + delta);
    };

    // Reset to normal speed after a delay
    let timeout;
    const resetSpeed = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        targetSpeed.current = 1; 
      }, 500);
    };

    window.addEventListener('wheel', (e) => {
      handleWheel(e);
      resetSpeed();
    });

    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeContent} ref={wrapperRef}></div>
    </div>
  );
}

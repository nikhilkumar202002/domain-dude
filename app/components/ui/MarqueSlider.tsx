import React from 'react';
import Image from 'next/image';

interface MarqueeSliderProps {
  slides: string[];
  reverse?: boolean;
  className?: string;
}

const MarqueeSlider: React.FC<MarqueeSliderProps> = ({
  slides,
  reverse = false,
  className = '',
}) => {
  return (
    <div className={`hero-left-slides marquee ${reverse ? 'reverse' : ''} ${className}`}>
      {slides.map((src, index) => (
        <div className="item" key={index}>
          <Image src={src} width={300} height={200} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MarqueeSlider;

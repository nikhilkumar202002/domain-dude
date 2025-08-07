import React from 'react'
import "./HeroStyle.css"
import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from '@radix-ui/themes';
import { GoArrowDown  } from "react-icons/go";
import MarqueeSlider from '../ui/MarqueSlider';

const SET_COUNT = 4

// Four separate portfolios, each with three items
const portfolios: string[][] = [
  [
    '/Portfolio/Techfuge.webp',
    '/Portfolio/DESERTROSEFLOWERS.webp',
    '/Portfolio/pantryindia.webp',
  ],
  [
    '/Portfolio/koffee-junction.webp',
    '/Portfolio/metaark-online.webp',
  ],
  [
    '/Portfolio/Techfuge.webp',
    '/Portfolio/DESERTROSEFLOWERS.webp',
    '/Portfolio/pantryindia.webp',
  ],
  [
    '/Portfolio/koffee-junction.webp',
    '/Portfolio/metaark-online.webp',
  ],
];

// Prepare slider configurations: repeated slides + direction
const sliderConfigs = portfolios.map((slides, idx) => ({
  repeated: Array(SET_COUNT).fill(slides).flat(),
  reverse: idx % 2 === 1,   // alternate direction
}))

const Hero = () => {

  return (
    <section className="hero-section">
      <div className="overlay overlay-top" />

{/* mobile overlay */}

<div className="mobile-hero-overlay"></div>

      <div className="hero-container h-screen flex gap-2">

         <div className="hero-left-marque flex gap-2">
          {sliderConfigs.slice(0, 2).map(({ repeated, reverse }, i) => (
            <div
              key={i}
              className={`hero-left-slides marquee ${reverse ? 'reverse' : ''}`}
              style={{ '--marquee-repeat': SET_COUNT } as React.CSSProperties}
            >
              <MarqueeSlider slides={repeated} reverse={reverse} />
            </div>
          ))}
          </div>

        <div className="hero-content-box relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-6 max-w-4xl mx-auto">

          <div className="hero-step">
            <ul>
              <li><Image src="./Icons/hand.svg" width={30} height={0} alt='hand wave' /></li>
              <li><HiArrowLongRight /></li>
              <li>Design</li>
              <li><HiArrowLongRight /></li>
              <li>Development</li>
              <li><HiArrowLongRight /></li>
              <li><Image src="./Icons/rocket.svg" width={25} height={0} alt='hand wave' /></li>
            </ul>
          </div>

          <div className="hero-content space-y-6">
            <h1 className='max-w-3xl'>Building Digital Solutions for Tomorrow’s Leaders</h1>

            <div className="hero-gmb-review flex gap-2 justify-center">
              <div className="hero-gmb flex items-center gap-3 justify-center">
                <div className="hero-gmb-logo">
                  <Image src="./Icons/google.svg" width={40} height={40} alt='google review'/>
                </div>
                <div className="hero-gmb-review">
                  <ul>
                    <li><Image src="./Icons/star.svg" width={20} height={20} alt='google review'/></li>
                    <li><Image src="./Icons/star.svg" width={20} height={20} alt='google review'/></li>
                    <li><Image src="./Icons/star.svg" width={20} height={20} alt='google review'/></li>
                    <li><Image src="./Icons/star.svg" width={20} height={20} alt='google review'/></li>
                    <li><Image src="./Icons/star.svg" width={20} height={20} alt='google review'/></li>
                  </ul>
                  <p className='hero-gmb-reviews'><span>4.8</span> Ratings</p>
                </div>
              </div>

            <div style={{ width: '1px', height: '50px', backgroundColor: '#ccc', margin: '0 20px 0 10px' }} />

              <div className="hero-gmb-avatar">
                <div className="hero-avatars">
                   <Image src="/avatar-1.jpg" width={50} height={50} alt="Company" className="avatar"/>
                  <Image src="/avatar-2.jpg" width={50} height={50} alt="Company" className="avatar"/>
                  <Image src="/avatar-3.jpg" width={50} height={50} alt="Company" className="avatar"/>
                  <Image src="/avatar-3.jpg" width={50} height={50} alt="Company" className="avatar"/>
                </div>
                <span className="reviews-count">10+ <br /><p>Company Colabration</p></span>
              </div>

              <div className="hero-clients">
                <div className="hero-clients-avatar">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
               <div className="hero-btn-wrapper">
      <div className="rotating-text">
        <svg
          viewBox="0 0 200 200"
          className="rotating-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M100,100
                m-75,0
                a75,75 0 1,1 150,0
                a75,75 0 1,1 -150,0
              "
            />
          </defs>
          <text
            dy="-4"              /* nudge text inward */
            textLength="440"      /* adjust to stretch around */
            className="circle-text"
          >
            <textPath
              xlinkHref="#circlePath"
              startOffset="0"
            >
              Domain Dude ★ Since 2012 ★ 
            </textPath>
          </text>
        </svg>
      </div>

      <Button className="hero-btn-one flex items-center justify-center">
        <GoArrowDown/>
      </Button>
    </div>
          </div>
        </div>

     <div className="hero-left-marque flex gap-2">
          {sliderConfigs.slice(2, 4).map(({ repeated, reverse }, i) => (
            <div
              key={i + 2}
              className={`hero-left-slides marquee ${reverse ? 'reverse' : ''}`}
              style={{ '--marquee-repeat': SET_COUNT } as React.CSSProperties}
            >
              <MarqueeSlider slides={repeated} reverse={reverse} />
            </div>
          ))}
        </div>

      </div>
      <div className="overlay overlay-bottom" />
    </section>
  )
}

export default Hero
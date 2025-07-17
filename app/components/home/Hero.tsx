import React from 'react'
import "./HeroStyle.css"
import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from '@radix-ui/themes';
import { GoArrowDown  } from "react-icons/go";

const slides = [
  '/Portfolio/colorland.jpg',
  '/Portfolio/desert-rose-flowers.jpg',
  '/Portfolio/lets-hear-it.jpg',
  '/Portfolio/MOCKUP-1.jpg',
  '/Portfolio/MOCKUP-2.jpg',
  '/Portfolio/MOCKUP-3.jpg',
  '/Portfolio/MOCKUP-4.jpg',
  '/Portfolio/MOCKUP-5.jpg',
  '/Portfolio/MOCKUP-6.jpg',
  '/Portfolio/techfuge.jpg',
]

const duplicated = [...slides, ...slides]

const Hero = () => {

  return (
    <section className="hero-section">
      <div className="overlay overlay-top" />

{/* mobile overlay */}

<div className="mobile-hero-overlay"></div>

      <div className="hero-container h-screen flex gap-2">

        <div className="hero-left-marque flex gap-2">
          <div className="hero-left-slides marquee">
             {duplicated.map((src, i) => (
                <div className="item" key={`c1-${i}`}>
                  <Image src={src} width={300} height={200} alt="" />
                </div>
              ))}
          </div>

          <div className="hero-left-slides marquee reverse">
           {duplicated.map((src, i) => (
          <div className="item" key={`c2-${i}`}>
            <Image src={src} width={300} height={200} alt="" />
          </div>
        ))}
          </div>
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
             <div className="hero-left-slides marquee">
             {duplicated.map((src, i) => (
          <div className="item" key={`c1-${i}`}>
            <Image src={src} width={300} height={200} alt="" />
          </div>
        ))}
          </div>

           <div className="hero-left-slides marquee reverse">
           {duplicated.map((src, i) => (
          <div className="item" key={`c2-${i}`}>
            <Image src={src} width={300} height={200} alt="" />
          </div>
        ))}
          </div>
        </div>

      </div>
      <div className="overlay overlay-bottom" />
    </section>
  )
}

export default Hero
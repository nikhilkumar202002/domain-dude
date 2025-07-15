import React from 'react'
import "./HeroStyle.css"
import Image from 'next/image'
import { HiArrowLongRight } from "react-icons/hi2";
import { Button } from '@radix-ui/themes';
import { GoArrowUpRight } from "react-icons/go";

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
      <div className="hero-container h-screen flex">

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
            <h1 className='max-w-3xl'>Global digital marketing agency your creative partner for Future Leaders.</h1>
            <div className="hero-btns flex gap-3 justify-center">
              <Button className='hero-btn-one flex gap-2 items-center'>Request a Strategy Call <GoArrowUpRight /></Button>
              <Button className='flex gap-2 items-center'>Explore Our Service <GoArrowUpRight /></Button>
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
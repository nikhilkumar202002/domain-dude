'use client'

import "@fontsource/raleway"; 
import "@fontsource/raleway/400.css"; 
import "@fontsource/raleway/400-italic.css"; 
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css"; 
import HeroSection from "./components/home/HeroSection";
import MarqueeSlider from "./components/home/MarqueeSlider";
import AboutSection from "./components/home/AboutSection";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <MarqueeSlider/>
        <AboutSection/>
    </>
  );
}

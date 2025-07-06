'use client'

import "@fontsource/raleway"; 
import "@fontsource/raleway/400.css"; 
import "@fontsource/raleway/400-italic.css"; 
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css"; 
import HeroSection from "./components/home/HeroSection";
// import AboutSection from "./components/home/AboutSection"; 
import ServiceSection from "./components/home/ServiceSection";
import PortfolioAccordian from "./components/home/PortfolioAccordian";
import MarqueSlider from "./components/ui/MarqueSlider";
import EmpoweringBrands from "./components/ui/EmpoweringBrands";
// import BentoGrid from "./components/home/BentoGrid";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <MarqueSlider/>
        <EmpoweringBrands/>
        {/* <AboutSection/> */}
        <ServiceSection/>
        <PortfolioAccordian/>
        {/* <BentoGrid/> */}

    </>
  );
}

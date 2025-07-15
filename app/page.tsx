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
// import PortfolioAccordian from "./components/home/PortfolioAccordian";
import MarqueSlider from "./components/ui/MarqueSlider";
import EmpoweringBrands from "./components/ui/EmpoweringBrands";
import Technologies from "./components/ui/Technologies";
import Testimonials from "./components/home/Testimonials";
import WhyChooseUs from "./components/home/WhyChooseUs";
import NewsBlog from "./components/home/NewsBlog";
import Hero from "./components/home/Hero";
// import BentoGrid from "./components/home/BentoGrid";

export default function Home() {
  return (
    <>
        <Hero/>
        <MarqueSlider/>
        <EmpoweringBrands/>
        {/* <AboutSection/> */}
        <ServiceSection/>
        <Technologies/>
        <WhyChooseUs/>
        <Testimonials/>
        <NewsBlog/>
        {/* <PortfolioAccordian/> */}
        {/* <BentoGrid/> */}

    </>
  );
}

'use client'

import "@fontsource/raleway"; 
import "@fontsource/raleway/400.css"; 
import "@fontsource/raleway/400-italic.css"; 
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css"; 
import ServiceSection from "./components/home/ServiceSection";
import EmpoweringBrands from "./components/ui/EmpoweringBrands";
import Technologies from "./components/ui/Technologies";
import Testimonials from "./components/home/Testimonials";
import WhyChooseUs from "./components/home/WhyChooseUs";
import NewsBlog from "./components/home/NewsBlog";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
        <Hero/>
        {/* <MarqueSlider/> */}
        <EmpoweringBrands/>
        {/* <AboutSection/> */}
        <ServiceSection/>
        <Technologies/>
        <Testimonials/>
        <NewsBlog/>
        {/* <PortfolioAccordian/> */}
        {/* <BentoGrid/> */}

    </>
  );
}

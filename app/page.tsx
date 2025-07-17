'use client';

import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/400-italic.css";
import "@fontsource/dm-sans";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/400-italic.css";

import Hero from "./components/home/Hero";
import AboutSection from "./components/home/AboutSection";
import EmpoweringBrands from "./components/ui/EmpoweringBrands";
import Technologies from "./components/ui/Technologies";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EmpoweringBrands />
      <Technologies />
      <Testimonials />
    </>
  );
}

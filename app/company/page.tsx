import React from 'react';
import CompanyHero from '../components/company/CompanyHero';
import "../components/company/CompanyStyles.css";
import CompanyMarquee from '../components/company/CompanyMarquee';
import CompanyAboutus from '../components/company/CompanyAboutus';
import CompanyHistory from '../components/company/CompanyHistory';
import OurTeam from '../components/company/OurTeam';
import Testimonials from '../components/home/Testimonials';

const page = () => {
  return (
    <>
      <CompanyHero/>
      <CompanyMarquee/>
      <CompanyAboutus/>
      <CompanyHistory/>
      <OurTeam/>
      <Testimonials/>
    </>
  )
}

export default page
import React from 'react';
import CompanyHero from '../components/company/CompanyHero';
import Services from '../components/home/Services';
import "../components/company/CompanyStyles.css";
import CompanyProducts from '../components/company/CompanyProducts';
import CompanySetup from '../components/company/CompanySetup';

const page = () => {
  return (
    <>
        <CompanyHero/>
        <div className='company-service-section'>
          <Services/>
        </div>
        <CompanyProducts/>
        <CompanySetup/>
    </>
  )
}

export default page
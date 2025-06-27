import React, { useState } from 'react'
import "./PricingPlan.css"
import * as Container from '@radix-ui/react-slot';
import { FiArrowUpRight } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { Button } from '@radix-ui/themes';


const PricingPlan = () => {

    const [planType, setPlanType] = useState("monthly");

        const handleTabClick = (selectedPlan: string) => {
        setPlanType(selectedPlan);
        };
          const monthlyPlans = [
    {
      title: "Basic Plan",
      price: "₹ 8,000",
      duration: "/ Month",
      desc: "Personal websites, portfolios, or small businesses starting online",
      features: [
        "Up to 5 Pages",
        "Mobile-Responsive Design",
        "WordPress or Static HTML/CSS",
        "Basic Contact Form",
        "Social Media Integration",
        "SEO-Friendly Structure",
        "15 Days Post-Launch Support",
      ],
      button: "Get Started"
    },
     {
      title: "Premium Plan",
      price: "₹ 22,000",
      duration: "/ Month",
      desc: "E-commerce, advanced websites, and brand-focused builds Includes",
      features: [
        "Unlimited Pages",
        "Next.js / React.js or Advanced WordPress",
        "E-Commerce Integration (or Shopify Customization)",
        "Admin Dashboard (Optional)",
        "Speed Optimization",
        "Premium Security & SEO Tools",
        "Google Analytics Setup",
      ],
      button: "Start Premium"
    },
    {
      title: "Standard Plan",
      price: "₹ 14,000",
      duration: "/ Month",
      desc: "Growing businesses, service providers, professionals Includes",
      features: [
        "Up to 10 Pages",
        "Custom UI Design (Figma/Figma to Code)",
        "Developed in WordPress / React.js",
        "Blog or News Section",
        "Basic Animations",
        "On-Page SEO",
        "Domain + Hosting Support",
      ],
      button: "Choose Plan"
    },
   
  ];

  const yearlyPlans = [
    {
      title: "Basic Plan",
      price: "₹ 85,000",
      duration: "/ Yearly",
      desc: "Personal sites, portfolios, local businesses Includes",
      features: [
        "Up to 5 Static or WordPress Pages",
        "Mobile-Responsive Layout",
        "Pre-designed UI Template",
        "Basic Contact Form",
        "Social Media Integration",
        "Free SSL Integration",
        "Domain & Hosting Setup Support",
        "Support: 3 Months Free Maintenance",
      ],
      button: "Get Started"
    },
   
    {
      title: "Premium Plan",
      price: "₹ 2,20,000",
      duration: "/ Yearly",
      desc: "E-commerce, SaaS, scalable brand websites Includes",
      features: [
        "Unlimited Pages",
        "Next.js / React.js or Advanced WordPress",
        "E-Commerce Integration (or Shopify Customization)",
        "Admin Dashboard (Optional)",
        "Speed Optimization",
        "Premium Security & SEO Tools",
        "Google Analytics Setup",
      ],
      button: "Start Premium"
    },
     {
      title: "Standard Plan",
      price: "₹ 1,40,000",
      duration: "/ Yearly",
      desc: "Service businesses, bloggers, startups Includes",
      features: [
        "Up to 10 Pages",
        "Custom UI Design (Figma/Figma to Code)",
        "Developed in WordPress / React.js",
        "Blog or News Section",
        "Basic Animations",
        "On-Page SEO",
        "Domain + Hosting Support",
      ],
      button: "Choose Plan"
    },
  ];

  const activePlans = planType === "monthly" ? monthlyPlans : yearlyPlans;

    return (
    <section className="pricing-plan-section">
      <Container.Slot className='mx-auto h-full px-5 md:px-12 lg:px-24'>
        <div className="pricing-plan-container">

          {/* Heading & Tabs */}
          <div className="pricing-header flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8">
            <div className="pricing-left-heading">
              <h4>Pricing & Plan</h4>
              <h1>Transparent Pricing for Powerful<br /> Digital Solutions</h1>
            </div>

            <div className="pricing-plan-tabs flex gap-2">
              <Button
                onClick={() => handleTabClick("monthly")}
                className={`pricing-plan-tab ${planType === "monthly" ? 'active-tab' : ''}`}>
                Monthly
              </Button>
              <Button
                onClick={() => handleTabClick("yearly")}
                className={`pricing-plan-tab ${planType === "yearly" ? 'active-tab' : ''}`}>
                Yearly
              </Button>
            </div>
          </div>

          {/* Dynamic Plan Cards */}
          <div className="pricing-plan-card-wrapper">
            {activePlans.map((plan, index) => (
              <div className={`pricing-plan-card ${plan.title === "Premium Plan" ? 'premium-plan-card' : ''}`} key={index}>
                <div className={`price-card-header ${plan.title === "Premium Plan" ? 'premium-plan-header' : ''}`}>
                  <h5>{plan.title}</h5>
                  <h1><span className={`plan-price-icon ${plan.title === "Premium Plan" ? 'premium-plan-icon' : ''}`}>{plan.price}</span> <span className={`price-month-bar ${plan.title === "Premium Plan" ? 'premium-plan-bar' : ''}`}>{plan.duration}</span></h1>
                  <p>{plan.desc}</p>
                </div>
                <div className="price-card-details relative">
                  <Button className={`price-card-btn ${plan.title === "Premium Plan" ? 'premium-plan-btn' : plan.title === "Standard Plan" ? 'standard-plan-btn' : ''} gap-2 flex items-center absolute -top-4 left-1/2 transform -translate-x-1/2`}>
                    {plan.button} <FiArrowUpRight />
                  </Button>
                  <div className="price-card-content">
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li className='flex gap-1 items-center' key={idx}><FaCircleCheck />{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container.Slot>
    </section>
  );
};

export default PricingPlan
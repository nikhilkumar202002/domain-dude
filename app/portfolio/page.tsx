import React from 'react'
import PortfolioHero from '../components/portfolio/PortfolioHero'
import PortfolioMarquee from '../components/portfolio/PortfolioMarquee'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'

const page = () => {
  return (
    <>
      <PortfolioHero/>
      <PortfolioMarquee/>
      <PortfolioGrid/>
    </>
  )
}

export default page
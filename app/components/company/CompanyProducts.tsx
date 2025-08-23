import { Button } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const CompanyProducts = () => {
  return (
    
    <>
        <section className="company-product">
            <div className="company-product-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="company-product-flex grid grid-cols-1 lg:grid-cols-[50%_50%] gap-15">
                    <div className="company-product-header">
                        <h1 className='company-product-heading'>We are Also <span className='company-product-highlight'>Creators!</span></h1>
                        <p className='company-product-description'>Apart from offering top-notch services, Domain Dude builds products that solve problems and make life cooler.</p>
                        <Button className='company-product-cta flex items-center gap-3'>Reach Us Now <GoArrowUpRight/></Button>
                    </div>

                    <div className="company-product-logos flex gap-15 justify-center items-center">
                        <Image src="./Logos/Koova-white.png" width={1000} height={0} alt='Koova'/>
                        <Image src="./Logos/Padam_Black-TAGLINE-white.png" width={1000} height={0} alt='Padam'/>
                        <Image src="./Logos/timbercraft-white.png" width={1000} height={0} alt='Timbercraft'/>
                    </div>
                </div>               
            </div>
        </section>
    </>
  )
}

export default CompanyProducts
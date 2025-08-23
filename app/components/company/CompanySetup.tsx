import { Button } from '@radix-ui/themes';
import Image from 'next/image'
import React from 'react'
import { IoCheckbox } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";


const CompanySetup = () => {
  return (
    <>
        <section className='company-setup'>
            <div className="company-setup-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="company-setup-flex grid grid-cols-1 lg:grid-cols-[50%_50%] gap-15">
                    <div className="company-setup-image">
                        <Image src="./Images/why-brand-love.jpg" alt="Setup Image " width={1200} height={0}/>
                    </div>

                    <div className="company-setup-content ">
                        <h1>Why Brands Love <span className='company-setup-content-highlight'>Domain Dude</span></h1>
                        <ul>
                            <li className='flex items-start gap-2'><span className='company-setup-icon'><IoCheckbox/></span> We think different, act bold, and deliver big.</li>
                            <li className='flex items-start gap-2'><span className='company-setup-icon'><IoCheckbox/></span> We are Kochi go-to digital ninjas for businesses that want to grow.</li>
                            <li className='flex items-start gap-2'><span className='company-setup-icon'><IoCheckbox/></span> We mix creativity + technology + marketing magic to make brands go BOOM!</li>
                        </ul>

                        <Button className='company-product-cta flex items-center gap-3'>Reach Us Now <GoArrowUpRight/></Button>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CompanySetup
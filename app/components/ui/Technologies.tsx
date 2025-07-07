import Image from 'next/image'
import React from 'react'
import "./Technologies.css"

const Technologies = () => {
  return (
    <>
        <section className='technologies-section'>
            <div className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="technologies-header">
                  <h4 className='technologies-sub-heading'>Tech Stack That Powers Digital Excellence</h4>
                </div>

                <div className="technologies-icons">
                    <div className="technologies-top">
                      <Image src="/Tech/ADOBECREATIVESUITE.png" width={100} height={0} alt="Adobe Creative Suite" />
                      <Image src="/Tech/CSS.png" width={100} height={0} alt="CSS" />
                      <Image src="/Tech/FIREBASE.png" width={100} height={0} alt="FIRE BASE" />
                      <Image src="/Tech/HTML5.png" width={100} height={0} alt="HTML5" />
                      <Image src="/Tech/LARAVEL.png" width={100} height={0} alt="ALARAVEL" />
                      <Image src="/Tech/NEXTJS.PNG" width={100} height={0} alt="NEXT JS" />
                      <Image src="/Tech/PHP.png" width={100} height={0} alt="PHP" />
                      <Image src="/Tech/REACTJS.png" width={100} height={0} alt="REACTJS" />
                      <Image src="/Tech/SHOPIFY.png" width={100} height={0} alt="SHOPIFY" />
                      <Image src="/Tech/WORDPRESS.png" width={100} height={0} alt="WORDPRESS" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Technologies
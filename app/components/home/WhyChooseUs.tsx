import React from 'react'
import "./WhyChooseUs.css"
import { MdArrowOutward } from "react-icons/md";
import CountUp from 'react-countup';

const WhyChooseUs = () => {
    return (
        <>
            <section className="whychooseus">
                <div className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                    <div className="y-flex-box flex flex-col md:flex-row gap-22 items-start">
                        <div className="y-flex-col flex-1">
                            <span className='y-flex-subheadline'>
                                Why Choose Us
                            </span>
                            <h1>Trusted by Clients, Powered by Results</h1>
                            <p className='y-cta-button flex items-center gap-2 justify-content-center'>Let Us Talk <MdArrowOutward /></p>
                        </div>
                        <div className="y-flex-col flex-1">
                            <p className='y-flex-col-description'>
                                At Domain Dude, we don’t just deliver services—we deliver measurable success. With result-oriented strategies backed by analytics and market insights, we ensure every step we take leads to your growth. Our client-centric approach means we personalize every solution to match your unique business goals, whether you're a startup or an established enterprise. We offer 24/7 support and expert consultation, guiding you throughout your journey. Most importantly, our services are affordable, scalable, and built to grow with your business—making us your trusted partner in achieving long-term digital excellence.
                            </p>
                        </div>
                    </div>

                   <div className="y-counter-container flex flex-wrap gap-[20px]">
  <div className="y-counter w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
    <h1><CountUp end={500} duration={4} />+</h1>
    <p>Successful Projects</p>
  </div>

  <div className="y-counter w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
    <h1><CountUp end={300} duration={4} />+</h1>
    <p>Happy Clients Worldwide</p>
  </div>

  <div className="y-counter w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
    <h1><CountUp end={99} duration={4} />%</h1>
    <p>Client Retention Rate</p>
  </div>

  <div className="y-counter w-[calc(50%-10px)] md:w-[calc(25%-15px)]">
    <h1><CountUp end={12} duration={4} />+</h1>
    <p>Year Of Experience</p>
  </div>
</div>



                </div>
            </section>
        </>
    )
}

export default WhyChooseUs
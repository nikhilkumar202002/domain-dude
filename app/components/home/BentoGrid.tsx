import React from 'react';
import "./BentoGrid.css";
import * as Container from '@radix-ui/react-slot';
import BentoChartGraph from '../ui/BentoChartGraph';


const BentoGrid = () => {
  return (
    <>
        <section className='bento-grid-main'>
                <Container.Slot className='container mx-auto h-full px-5 md:px-12 lg:px-24'>
                    <div className="bento-grid-container grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                        <div className="bento-grid-cards rounded-2xl text-white col-span-1">
                            <h3 className="text-xl font-semibold">Drive More Sales</h3>
                            <p className="text-sm mt-2 text-gray-300">
                            My Goal Is To Save Your Time & Ensure You Can Start Reaching Your Customers Without Delay
                            </p>
                            <div className="bento-graph mt-4 w-full h-64">
                                <BentoChartGraph/>
                            </div>
                        </div> 

                        <div className="bento-grid-cards rounded-2xl p-6 text-white col-span-1 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold">Delivery Always On Time</h3>
                            <p className="text-sm mt-2 text-gray-300 text-center">
                            My Goal Is To Save Your Time & Ensure You Can Start Reaching Your Customers Without Delay
                            </p>
                        </div>   

                        <div className="bento-grid-cardsrounded-2xl p-6 text-white col-span-1 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-semibold">Need Consultation For Your Website?</h3>                                                      
                        </div>

                         <div className="bento-grid-cards rounded-2xl p-6 text-white col-span-2 flex flex-col justify-between">
                            <div>
                            <h3 className="text-lg leading-relaxed">
                                In The Flow Of Creation, The Website Becomes A Mirror Of The Mind—Still, Yet Alive.
                                <span className="text-green-400"> This is The ZenForge Way.</span>
                            </h3>
                            <div className="flex items-center mt-4">
                                <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="/path/to/user1.jpg" />
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="/path/to/user2.jpg" />
                                <img className="w-8 h-8 rounded-full border-2 border-black" src="/path/to/user3.jpg" />
                                </div>
                                <span className="ml-3 text-sm text-gray-300">98% Client Success Rate</span>
                            </div>
                            </div>
                            <img src="/path/to/zen-stone.png" alt="Zen Stone" className="mt-6" />
                        </div>

                        <div className="bento-grid-cards rounded-2xl p-6 text-white col-span-1">
                                <h3 className="text-xl font-semibold">Technology Stack We Use</h3>
                                <p className="text-sm text-gray-300 mt-2">
                                Bring Your Data With Our Built-In Integrations For Accounting, Revenue Tools And Banking.
                                </p>
                            <div className="grid grid-cols-4 gap-4 mt-4">
                           
                            </div>
                        </div>
                    </div>
                </Container.Slot>
        </section>
    </>
  )
}

export default BentoGrid
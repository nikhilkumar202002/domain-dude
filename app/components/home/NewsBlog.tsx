import React from 'react'
import "./NewsBlogs.css"
import { Button } from '@radix-ui/themes'
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Image from 'next/image'

const NewsBlog = () => {
  return (
    <>
        <section className="news-blog">
            <div className="news-blogs-container container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div className="news-blog-header flex justify-between gap-30 items-end ">
                    <div className="news-blog-heading w-[50%]">
                        <h4>News & Insights</h4>
                        <h1>Expert Tips & Trends for Future-Ready Brands</h1>
                    </div>
                    <div className="news-blog-btn">
                        <Button className='flex items-center justify-content-center'>View All <MdArrowOutward /></Button>
                    </div>
                </div>

                <div className="news-blogs-flex">
                    <div className="news-blog-card-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="news-blog-card">
                            <div className="news-blog-image">
                                <Image src="/BlogNews/blog-one.webp" alt='News blog' height={0} width={1200}/>
                            </div>
                            <div className="blog-news-content">
                                <h5>12 July, 2025</h5>
                                <h1>Top 5 Website Design Trends in 2025</h1>
                                <p>Discover what’s redefining user experience this year—from minimalism to motion UI.</p>
                                <Button className='flex items-center gap-2'>Read More <GoArrowUpRight/></Button>
                            </div>
                        </div>

                         <div className="news-blog-card">
                            <div className="news-blog-image">
                                <Image src="/BlogNews/blog-one.webp" alt='News blog' height={0} width={1200}/>
                            </div>
                            <div className="blog-news-content">
                                <h5>20 July, 2025</h5>
                                <h1>How SEO Can 10x Your Business Growth in 6 Months</h1>
                                <p>Proven strategies that helped our clients rank #1 on Google.</p>
                                <Button className='flex items-center gap-2'>Read More <GoArrowUpRight/></Button>
                            </div>
                        </div>

                         <div className="news-blog-card">
                            <div className="news-blog-image">
                                <Image src="/BlogNews/blog-one.webp" alt='News blog' height={0} width={1200}/>
                            </div>
                            <div className="blog-news-content">
                                <h5>12 July, 2025</h5>
                                <h1>Top 5 Website Design Trends in 2025</h1>
                                <p>Discover what’s redefining user experience this year—from minimalism to motion UI.</p>
                                <Button className='flex items-center gap-2'>Read More <GoArrowUpRight/></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
    </>
  )
}

export default NewsBlog
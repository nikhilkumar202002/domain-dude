'use client';

import React, { useState } from 'react';
import './Porfolioaccordian.css';
import * as Container from '@radix-ui/react-slot';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

const portfolios = [
    {
        id: 1,
        title: 'Portfolio 1',
        date: 'Jan 2024',
        description: 'Description of portfolio in two lines that tells what this portfolio is about.',
        category: 'UI/UX',
        image: '/Portfolio/sample-portfolio.jpg',
    },
    {
        id: 2,
        title: 'Portfolio 2',
        date: 'Feb 2024',
        description: 'Another cool project with web design and UX strategy.',
        category: 'Web Design',
        image: '/Portfolio/sample-portfolio.jpg',
    },
    {
        id: 3,
        title: 'Portfolio 3',
        date: 'Mar 2024',
        description: 'Creative branding and identity design showcase.',
        category: 'Branding',
        image: '/Portfolio/sample-portfolio.jpg',
    },
    {
        id: 4,
        title: 'Portfolio 4',
        date: 'Apr 2024',
        description: 'Marketing assets and motion graphics examples.',
        category: 'Marketing',
        image: '/Portfolio/sample-portfolio.jpg',
    },
    {
        id: 5,
        title: 'Portfolio 5',
        date: 'May 2024',
        description: 'Tech product UI with user-first approach.',
        category: 'Product Design',
        image: '/Portfolio/sample-portfolio.jpg',
    },
];


const PortfolioAccordian = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [hoverImage, setHoverImage] = useState<string | null>(null);
    const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleHover = (image: string, e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setHoverImage(image);
        setHoverPosition({ x: clientX + 20, y: clientY + 20 });
    };

    const handleMouseLeave = () => {
        setHoverImage(null);
    };

    return (
        <section className="portfolio-main">
            <Container.Slot className="container mx-auto h-full px-5 md:px-12 lg:px-24">
                <div>
                    {/* Header */}
                    <div className="portfolio-container-header flex justify-between items-start w-full gap-8 flex-col md:flex-row">
                        <div className="portfolio-header-left w-full md:w-[60%]">
                            <h1 className="text-[50px] leading-[60px] font-semibold font-['DM Sans']">
                                Explore Our Portfolio of Powerful Digital Solutions
                            </h1>
                        </div>
                        <div className="portfolio-header-right w-full md:w-[40%] flex flex-col items-start text-left">
                            <p className="text-[18px] font-medium font-['Raleway'] w-[90%] mb-4">
                                From web design and branding to marketing and media, discover how we help brands grow through strategy, creativity, and tech.
                            </p>
                            <Button className="portfolio-btn flex items-center gap-2">
                                View Our Work <MdArrowOutward />
                            </Button>
                        </div>
                    </div>

                    {/* Accordions */}
                    <div className="portfolio-accordian-main mt-12">
                        <div className="portfolio-accoidian-container flex flex-col gap-6">
                            {portfolios.map((item, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        key={item.id}
                                        className={`portfolio-accordian-box relative transition-all duration-300`}
                                        onMouseMove={(e) => handleHover(item.image, e)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div
                                            className="portfolio-accordian-header flex flex-wrap md:flex-row md:justify-between w-full"
                                            onClick={() => setActiveIndex(isActive ? null : index)}
                                        >
                                            <div className="portfolio-accordian-header-col md:w-1/2 w-full">
                                                <h5 className="text-xl font-semibold">{item.title}</h5>
                                                <p className="text-sm text-gray-500">{item.date}</p>
                                            </div>
                                            <div className="portfolio-accordian-header-col md:w-1/2 w-full flex  md:items-center">
                                                <div className="portfolio-accordian-header-col-item text-left w-full">
                                                    <p className="leading-snug">{item.description}</p>
                                                </div>
                                                <div className="portfolio-accordian-header-col-item">
                                                    <span className="portfolio-accordian-category">
                                                        {item.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Smooth Transition Accordion Image */}
                                        <div
                                            className={`portfolio-accordian-box-image transition-all duration-700 ease-in-out overflow-hidden ${isActive ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <Image
                                                src={item.image}
                                                width={1200}
                                                height={500}
                                                alt="Portfolio preview"
                                                className="portfolio-accordian-box-image  shadow-lg w-full object-cover transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* Hover Image Preview */}
                    {hoverImage && (
                        <div
                            className="fixed z-50 pointer-events-none transition-all duration-150 ease-in"
                            style={{
                                top: hoverPosition.y,
                                left: hoverPosition.x,
                                width: '200px',
                                height: 'auto',
                            }}
                        >
                            <Image
                                width={200}
                                height={0}
                                src={hoverImage}
                                alt="Hover Preview"
                                className="rounded-lg border border-gray-300 shadow-md"
                            />
                        </div>
                    )}
                </div>
            </Container.Slot>
        </section>
    );
};

export default PortfolioAccordian;

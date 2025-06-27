'use client';

import 'swiper/css';
import Image from 'next/image';
import './TechSlider.css'

const images = [
    '/tech/ADOBECREATIVESUITE.png',
    '/tech/CSS.png',
    '/tech/FIREBASE.png',
    '/tech/HTML5.png',
    '/tech/NEXTJS.png',
    '/tech/PHP.png',
    '/tech/REACTJS.png',
    '/tech/SHOPIFY.png',
    '/tech/WORDPRESS.png',
    '/tech/LARAVEL.png',
];

const TechSlider = () => {

    // const sliderRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="tech-slider-wrapper">
                <div className="tech-slider-track group">
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="tech-slide">
                            <Image
                                src={src}
                                alt={`Tech ${index}`}
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                {/* Overlay left & right */}
                <div className="tech-slider-overlay left" />
                <div className="tech-slider-overlay right" />
            </div>
        </>
    )
}

export default TechSlider
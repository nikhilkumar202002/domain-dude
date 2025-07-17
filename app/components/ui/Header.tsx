'use client';

import { useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import './headerfooter.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const servicesMegaMenu = [
  {
    title: "Web Development",
    items: [
      { label: "Corporate Websites", href: "/services/web-development/corporate" },
      { label: "E-commerce Platforms", href: "/services/web-development/ecommerce" },
      { label: "Web Apps", href: "/services/web-development/apps" },
      { label: "Maintenance & Support", href: "/services/web-development/support" },
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      { label: "User Research", href: "/services/ui-ux/research" },
      { label: "Wireframing", href: "/services/ui-ux/wireframing" },
      { label: "Prototyping", href: "/services/ui-ux/prototyping" },
      { label: "Usability Testing", href: "/services/ui-ux/testing" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      { label: "SEM", href: "/services/digital-marketing/sem" },
      { label: "Social Media Marketing", href: "/services/digital-marketing/social-media" },
      { label: "Email Campaigns", href: "/services/digital-marketing/email" },
    ],
  },
  {
    title: "Branding",
    items: [
      { label: "Logo Design", href: "/services/branding/logo" },
      { label: "Brand Strategy", href: "/services/branding/strategy" },
      { label: "Visual Identity", href: "/services/branding/identity" },
      { label: "Brand Guidelines", href: "/services/branding/guidelines" },
    ],
  },
  {
    title: "Video Production",
    items: [
      { label: "Promo Videos", href: "/services/video-production/promo" },
      { label: "Animation", href: "/services/video-production/animation" },
      { label: "Corporate Videos", href: "/services/video-production/corporate" },
      { label: "Editing Services", href: "/services/video-production/editing" },
    ],
  },
  {
    title: "Graphics Design",
    items: [
      { label: "Posters & Flyers", href: "/services/graphics/posters" },
      { label: "Infographics", href: "/services/graphics/infographics" },
      { label: "Digital Illustrations", href: "/services/graphics/illustrations" },
      { label: "Packaging", href: "/services/graphics/packaging" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky,     setIsSticky]     = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById('banner');
      if (!banner) return;
      setIsSticky(banner.getBoundingClientRect().bottom <= 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`site-header ${isSticky ? 'site-header--sticky' : ''}`}>
        {/* wrap nav and mega-menu in one relative container */}
        <div
          className="container relative mx-auto flex items-center justify-between h-full px-5 md:px-12 lg:px-24"
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          {/* LEFT LINKS */}
          <ul className="header-menu-list hidden md:flex items-center gap-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/company">Company</Link></li>

            <li
              className="group relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
            >
              <Link href="/services" className="flex items-center gap-1">
                Service
                <span className="header-service-arrow transition-transform duration-300 group-hover:rotate-180">
                  <MdArrowOutward />
                </span>
              </Link>
            </li>

            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
          </ul>

          {/* LOGO */}
          <div className="menu-logo">
            <Link href="/">
              <Image src="/main-logo.png" alt="Domain Dude Logo" width={80} height={30} />
            </Link>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <div className='header-login-signup flex gap-3'>
              <Button className="header-btn header-signup hidden md:flex rounded-full items-center gap-2">
                Sign Up <MdArrowOutward />
              </Button>
              <Button className="header-btn hidden md:flex rounded-full items-center gap-2">
                Login <MdArrowOutward />
              </Button>
            </div>

            <div className="hidden md:block h-[50px] w-px bg-gray-300 mx-5" />

            <div className="header-social hidden md:flex items-center gap-3 text-lg">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
              <FaYoutube />
            </div>

            <Button
              className="header-mobile-btn flex md:hidden rounded-full items-center gap-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Menu <TbMenuDeep />
            </Button>
          </div>

          {/* MEGA‑MENU */}
          {megaMenuOpen && (
            <div
              className={`mega-menu-container absolute inset-x-0 top-full bg-white z-40
              ${megaMenuOpen ? 'block' : 'hidden'}`}
  onMouseEnter={() => setMegaMenuOpen(true)}
            >
              <div className="container mx-auto px-8 py-6 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-8">
                  {/* Left: service lists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {servicesMegaMenu.map((col) => (
                      <div key={col.title} className="mega-menu-items-list">
                        <h1>{col.title}</h1>
                        <ul className="list-inside space-y-1">
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href} className='flex items-center gap-2'><span className='mega-menu-arrow '><GoArrowUpRight/></span>{item.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Right: portfolio image */}
                  <div className="mega-menu-portfolio-slide border-l border-gray-300 pl-6">
                    <Image
                      src="/Portfolio/MOCKUP-1.jpg"
                      alt="Portfolio sample"
                      width={300}
                      height={400}
                      className="object-cover w-full h-auto"
                    />

                  
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col gap-4 px-6 py-6">
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/company" onClick={() => setMobileMenuOpen(false)}>Company</Link></li>
            <li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

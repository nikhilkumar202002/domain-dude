'use client';

import { useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import './headerfooter.css';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaCode, FaPaintBrush, FaBullhorn, FaTrademark, FaVideo, FaPencilRuler } from "react-icons/fa";

const servicesDropdown = [
  {
    label: "Web Development",
    href: "/services/web-development",
    icon: <FaCode />,
    description: "Build fast, secure, and responsive websites."
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux",
    icon: <FaPaintBrush />,
    description: "Create seamless and engaging user experiences."
  },
  {
    label: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: <FaBullhorn />,
    description: "Boost your brand visibility and online presence."
  },
  {
    label: "Branding",
    href: "/services/branding",
    icon: <FaTrademark />,
    description: "Craft a strong and unique brand identity."
  },
  {
    label: "Video Production",
    href: "/services/video-production",
    icon: <FaVideo />,
    description: "Produce stunning and impactful visual content."
  },
  {
    label: "Graphics Design",
    href: "/services/graphics",
    icon: <FaPencilRuler />,
    description: "Design eye-catching graphics that stand out."
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);

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
        >
          {/* LEFT LINKS */}
          <ul className="header-menu-list hidden md:flex items-center gap-5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/company">Company</Link></li>

            <li
              className="relative group"
              onMouseEnter={() => setServiceMenuOpen(true)}
              onMouseLeave={() => setServiceMenuOpen(false)}
            >
              {/* Services Button */}
              <button className="flex items-center gap-1">
                Services
                <span
                  className={`header-service-arrow transition-transform duration-300 ${serviceMenuOpen ? 'rotate-180' : ''
                    }`}
                >
                  <GoArrowUpRight />
                </span>
              </button>

              <ul
                className={`header-service-dropdown absolute left-0 top-full mt-8 bg-white shadow-md rounded-md w-[600px] z-50 transition-all duration-300 flex gap-6 ${serviceMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                  }`}
                onMouseEnter={() => setServiceMenuOpen(true)}
                onMouseLeave={() => setServiceMenuOpen(false)}
              >

                <div className="dropdown-services w-1/2">
                  {servicesDropdown.map((service, index) => (
                    <li
                      key={index}
                      className="dropdown-item mb-3 last:mb-0"
                    >
                      <a href={service.href} className="flex gap-3 items-start hover:text-blue-600 transition-colors">
                        <span className="text-lg">{service.icon}</span>
                        <div>
                          <h4 className="font-semibold">{service.label}</h4>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </div>

                <div className="dropdown-item-images w-1/2 flex items-start justify-center">
                <div className="dropdown-item-image">
                   <Image
                    src="./Services/web-development.jpg"
                    alt="Service Preview"
                    width={250}
                    height={200}
                    className=" object-cover"
                  />
                </div>
                 
                </div>
              </ul>
            </li>


            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
          </ul>

          {/* LOGO */}
          <div
            className="menu-logo"
            style={{ cursor: 'pointer' }}
          >
            <Link href="/">

              <Image
                src="/main-logo.png"
                alt="Domain Dude Logo"
                width={80}
                height={30}
              />

            </Link>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3">
            <div className='header-login-signup flex gap-3'>
              <Button className="header-btn hidden md:flex rounded-full items-center gap-2">
                Get a quote <MdArrowOutward />
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
              Menu
            </Button>
          </div>

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

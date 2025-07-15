'use client';

import { useState } from 'react';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import './headerfooter.css';
import { FaInstagram,FaFacebook,FaLinkedin,FaYoutube } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white z-50 h-[90px] w-full">
        <div className="container mx-auto flex items-center justify-between h-full px-5 md:px-12 lg:px-24">
          <div className="flex items-center gap-4">

            <ul className="header-menu-list hidden md:flex items-center gap-8">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/company">Company</Link></li>
              <li className="group">
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

         
          </div>

          <div className="menu-logo">
             <Link href="/">
              <Image src="/main-logo.png" alt="Domain Dude Logo" width={80} height={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <div className='header-login-signup flex gap-3'>
              <Button className="header-btn header-signup hidden md:flex rounded-full items-center gap-2">
                Sign Up
                <span>
                  <MdArrowOutward />
                </span>
              </Button>

              <Button className="header-btn hidden md:flex rounded-full items-center gap-2">
                Login
                <span>
                  <MdArrowOutward />
                </span>
              </Button>
            </div>

            <div style={{ width: '1px', height: '50px', backgroundColor: '#ccc', margin: '0 20px' }} />

            <div className="header-social">
              <div className="header-social-items"><FaInstagram /></div>
              <div className="header-social-items"><FaFacebook /></div>
              <div className="header-social-items"><FaLinkedin /></div>
              <div className="header-social-items"><FaYoutube /></div>
            </div>


            {/* Mobile only */}
            <Button
              className="header-mobile-btn flex md:hidden rounded-full items-center gap-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Menu
              <span className="leading-none"><TbMenuDeep /></span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
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

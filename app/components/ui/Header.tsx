'use client';

import { useState } from 'react';
import { Button } from '@radix-ui/themes';
import { MdArrowOutward } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
import './headerfooter.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between w-full px-5 md:px-12 lg:px-24 h-[90px] bg-white z-50">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/LOGO.png" alt="Domain Dude Logo" width={130} height={30} />
          </Link>

        <ul className="header-menu-list hidden md:flex items-center gap-8 px-20">
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
        

          {/* Mobile only */}
        <Button
            className="header-mobile-btn flex md:hidden rounded-full items-center gap-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            Menu
            <span className="leading-none"><TbMenuDeep /></span>
        </Button>

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

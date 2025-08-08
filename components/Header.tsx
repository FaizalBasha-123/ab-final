
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img 
                src="https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754651314/AB-LOGO-HR-1_n2z2qd.jpg" 
                alt="AB Lincoln & Company" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Home</Link>
            <Link href="/servicedetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Services</Link>
            {/*<Link href="#works" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Recent Works</Link>*/}
            <Link href="/blogs" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Blogs</Link>
            <Link href="/aboutme" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">About</Link>
            <Link href="/contactdetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Contact</Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Home</Link>
              <Link href="/servicedetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Services</Link>
              {/*<Link href="#works" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Recent Works</Link>*/}
              <Link href="/blogs" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Blogs</Link>
              <Link href="/aboutme" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">About</Link>
              <Link href="/contactdetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

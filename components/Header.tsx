
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white sticky top-0 z-50 h-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <img
                src="https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754651314/AB-LOGO-HR-1_n2z2qd.jpg"
                alt="AB Lincoln & Company"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Home</Link>
            <Link href="/servicedetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Services</Link>
            <Link href="/blogs" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Blogs</Link>
            <Link href="/aboutme" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">About</Link>
            <Link href="/contactdetails" className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer">Contact</Link>
          </nav>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute inset-0 bg-black bg-opacity-25" />
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white md:hidden py-4 border-t shadow-lg z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-2 px-4">
              <Link
                href="/"
                className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/servicedetails"
                className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/aboutme"
                className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contactdetails"
                className="font-avenir font-medium text-gray-700 hover:text-[#202b5e] transition-colors cursor-pointer py-2 px-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Centralized ATS
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#section-hero" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/#section-features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link href="/auth/login" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/#section-hero" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/#section-features" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link href="/auth/login" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity text-center" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
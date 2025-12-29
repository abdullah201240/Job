'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'cta'];
      const current = sections.find(section => {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#section-hero', id: 'hero' },
    { name: 'Features', href: '#section-features', id: 'features' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="flex items-center group">
            <a href="/" className="relative flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient hidden sm:block">
                Centralized ATS
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm animate-fade-in" />
                )}
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="/auth/login"
              className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-white/5"
            >
              Login
            </a>
            <a
              href="/auth/signup"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white focus:outline-none transition-colors duration-300"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-1 border-t border-white/10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2">
              <a
                href="/auth/login"
                className="block px-4 py-3 text-center text-sm font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="/auth/signup"
                className="block px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
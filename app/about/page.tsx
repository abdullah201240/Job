'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              About Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Centralized ATS
            </span>
          </h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We're revolutionizing the hiring process with our AI-powered Applicant Tracking System. 
              Our platform connects companies with the right talent faster and more efficiently than ever before.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded in 2025, Centralized ATS was created to solve the biggest challenges in recruitment: 
              time-consuming processes, lack of visibility, and poor candidate experience. 
              Our team of experts has built a solution that streamlines every aspect of hiring.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Mission</h3>
                <p className="text-gray-300">
                  To make hiring effortless by connecting the right candidates with the right opportunities.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Vision</h3>
                <p className="text-gray-300">
                  To be the leading platform that transforms how companies find and retain top talent.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-pink-400 mb-3">Values</h3>
                <p className="text-gray-300">
                  Innovation, transparency, efficiency, and putting people first in every decision.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link href="/" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id^='section-']").forEach((el) => {
      observer.observe(el);
    });

    // Also observe the new sections
    const aboutSection = document.getElementById('section-about');
    const pricingSection = document.getElementById('section-pricing');
    
    if (aboutSection) observer.observe(aboutSection);
    if (pricingSection) observer.observe(pricingSection);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Generate Apply Links",
      description: "Create unique application links for each job posting and share them across any platform instantly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Unified Dashboard",
      description: "Manage all applications in one place with powerful filtering and search capabilities.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Smart Pipeline",
      description: "Visual Kanban board to track candidates through every stage of your hiring process.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🤖",
      title: "AI Screening",
      description: "Automated candidate screening and ranking to find the best fits faster.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📧",
      title: "Auto Communication",
      description: "Send automated emails and notifications to keep candidates engaged.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "📈",
      title: "Analytics & Reports",
      description: "Deep insights into your hiring metrics and team performance.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { value: "10K+", label: "Applications Processed" },
    { value: "500+", label: "Companies Trust Us" },
    { value: "95%", label: "Time Saved" },
    { value: "4.9★", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
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

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-32 pb-32">
        <div 
          id="section-hero"
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible['section-hero'] !== false ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm animate-fade-in">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ✨ Next-Gen Applicant Tracking System
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient">
              Hiring Made
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Effortless
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your recruitment process with AI-powered tracking, 
            automated workflows, and real-time collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-700 rounded-full font-semibold text-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
              Watch Demo →
            </button>
          </div>

          {/* Floating Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative container mx-auto px-4 py-32">
        <div 
          id="section-features"
          className={`transition-all duration-1000 delay-200 ${
            isVisible['section-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build a world-class hiring pipeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-8 hover:border-transparent transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`text-5xl mb-4 inline-block p-4 bg-gradient-to-br ${feature.color} rounded-2xl`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative container mx-auto px-4 py-32">
        <div 
          id="section-about"
          className={`transition-all duration-1000 delay-200 ${
            isVisible['section-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About Our Platform
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Revolutionizing the hiring process with AI-powered solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Mission
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're dedicated to making hiring effortless by connecting the right candidates with the right opportunities. 
                  Our platform streamlines every aspect of the recruitment process.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading platform that transforms how companies find and retain top talent 
                  through innovative technology and user-centric design.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">AI-Powered Matching</h4>
                  <p className="text-gray-400">Advanced algorithms that match candidates to roles with unprecedented accuracy.</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Real-time Collaboration</h4>
                  <p className="text-gray-400">Enable seamless communication between hiring teams and stakeholders.</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                  <h4 className="text-xl font-bold text-pink-400 mb-2">Analytics & Insights</h4>
                  <p className="text-gray-400">Deep insights into your hiring metrics and team performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative container mx-auto px-4 py-32">
        <div 
          id="section-cta"
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse" />
            
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of companies already using our platform to find the best talent faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  Get Started Free
                </button>
                <button className="px-10 py-5 border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative container mx-auto px-4 py-32">
        <div 
          id="section-pricing"
          className={`transition-all duration-1000 delay-200 ${
            isVisible['section-pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for your team. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    $29
                  </span>
                  <span className="text-gray-400"> /month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Up to 5 job postings
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Basic applicant tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    100 applications/month
                  </li>
                </ul>
                
                <button className="w-full py-4 bg-gray-800 text-white border border-gray-700 rounded-xl font-semibold text-base hover:bg-gray-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Professional Plan - Popular */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/50 rounded-3xl p-8 hover:border-purple-500/70 transition-all duration-300 hover:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center pt-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    $79
                  </span>
                  <span className="text-gray-400"> /month</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited job postings
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced applicant tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Unlimited applications
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom branding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Analytics dashboard
                  </li>
                </ul>
                
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold text-base hover:opacity-90 transition-opacity">
                  Try Free for 14 Days
                </button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Custom
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Professional
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SSO & security features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Custom reporting
                  </li>
                </ul>
                
                <button className="w-full py-4 bg-gray-800 text-white border border-gray-700 rounded-xl font-semibold text-base hover:bg-gray-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Centralized ATS. All rights reserved.</p>
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
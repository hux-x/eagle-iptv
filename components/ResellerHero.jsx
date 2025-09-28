"use client"
import React from 'react';
import { Globe, ExternalLink } from 'lucide-react';

// Custom color styles
const customColors = {
  primary: '#5D688A',      // Muted blue-gray
  cream: '#FFF2EF',        // Warm cream
  dustyRose: '#E5BEB5'     // Dusty rose
};

// Hero Section Component
export default function HeroSection () {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden" 
      style={{ 
        background: `linear-gradient(135deg, ${customColors.cream} 0%, ${customColors.dustyRose}40 50%, ${customColors.primary}20 100%)` 
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 25% 25%, ${customColors.primary}15, transparent 50%)` }}></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: `${customColors.dustyRose}80` }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: `${customColors.primary}60` }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="text-5xl mr-3">🦅</span>
              <span 
                className="text-sm font-medium px-4 py-2 rounded-full backdrop-blur border" 
                style={{ 
                  backgroundColor: `${customColors.dustyRose}40`, 
                  color: customColors.primary,
                  borderColor: `${customColors.dustyRose}60`
                }}
              >
                Eagle IPTV Reseller Program
              </span>
            </div>
            
            {/* Heading */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" 
              style={{ color: customColors.primary }}
            >
              Launch Your Own{' '}
              <span 
                style={{ 
                  background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.primary})`, 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}
              >
                IPTV Empire
              </span>
            </h1>
            
            {/* SEO Content */}
            <p 
              className="text-xl mb-10 leading-relaxed max-w-2xl" 
              style={{ color: `${customColors.primary}E0` }}
            >
              Become a part of the <strong style={{ color: customColors.primary }}>Eagle IPTV Reseller Program </strong> 
              and grow your own <strong style={{ color: customColors.primary }}>IPTV business</strong>. With 
              <strong style={{ color: customColors.primary }}> direct panel access</strong>, an easy-to-use 
              <strong style={{ color: customColors.primary }}> credits system</strong>, and 
              <strong style={{ color: customColors.primary }}> no VPS or technical setup required</strong>, 
              you can manage unlimited clients and subscriptions seamlessly. Earn up to 
              <strong style={{ color: customColors.dustyRose }}> 200% profit margins</strong> while reselling 
              premium <strong style={{ color: customColors.primary }}>IPTV subscriptions</strong> backed by 
              reliable service, high uptime, and 24/7 reseller support via WhatsApp and Telegram.
            </p>
            
            {/* Why Eagle IPTV */}
            <div 
              className="mb-10 p-6 backdrop-blur rounded-2xl border" 
              style={{ backgroundColor: `${customColors.cream}80`, borderColor: `${customColors.dustyRose}40` }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: customColors.primary }}>
                <Globe className="h-6 w-6 mr-2" />
                🌍 Why Eagle IPTV?
              </h3>
              <p className="mb-4" style={{ color: `${customColors.primary}C0` }}>
                Eagle IPTV is a trusted <strong style={{ color: customColors.primary }}>IPTV supplier</strong> with 
                <strong style={{ color: customColors.dustyRose }}> 10+ years of experience</strong>. Our reseller program 
                is designed for <strong style={{ color: customColors.primary }}>home and business use</strong>, providing 
                <strong style={{ color: customColors.primary }}> high-performance IPTV services</strong> with global coverage.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-bold text-lg" style={{ color: customColors.primary }}>1000s</div>
                  <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Live TV & VOD</div>
                  <div className="text-xs" style={{ color: `${customColors.primary}60` }}>HD & 4K channels</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg" style={{ color: customColors.dustyRose }}>⚡ Fast</div>
                  <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Zapping</div>
                  <div className="text-xs" style={{ color: `${customColors.primary}60` }}>Zero buffering</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg" style={{ color: customColors.primary }}>Global</div>
                  <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Coverage</div>
                  <div className="text-xs" style={{ color: `${customColors.primary}60` }}>Sports, movies, kids</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg" style={{ color: customColors.dustyRose }}>99.9%</div>
                  <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Uptime</div>
                  <div className="text-xs" style={{ color: `${customColors.primary}60` }}>Premium infrastructure</div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                className="group text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl" 
                style={{ background: `linear-gradient(135deg, ${customColors.primary}, ${customColors.dustyRose})` }}
              >
                🚀 Start Reselling Now
                <ExternalLink className="inline h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="border-2 backdrop-blur px-10 py-4 rounded-2xl text-lg font-bold transition-all" 
                style={{ 
                  borderColor: `${customColors.primary}80`, 
                  backgroundColor: `${customColors.cream}60`,
                  color: customColors.primary
                }}
              >
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 backdrop-blur rounded-xl" style={{ backgroundColor: `${customColors.cream}60` }}>
                <div 
                  className="text-4xl font-bold" 
                  style={{ background: `linear-gradient(135deg, ${customColors.primary}, ${customColors.dustyRose})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  200%
                </div>
                <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Profit Margins</div>
              </div>
              <div className="text-center p-4 backdrop-blur rounded-xl" style={{ backgroundColor: `${customColors.cream}60` }}>
                <div 
                  className="text-4xl font-bold" 
                  style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.primary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  ∞
                </div>
                <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Unlimited Clients</div>
              </div>
              <div className="text-center p-4 backdrop-blur rounded-xl" style={{ backgroundColor: `${customColors.cream}60` }}>
                <div className="text-4xl font-bold" style={{ color: customColors.primary }}>24/7</div>
                <div className="text-sm" style={{ color: `${customColors.primary}80` }}>Reseller Support</div>
              </div>
            </div>
          </div>
          
          {/* Mock Panel Preview */}
          <div className="relative">
            <div 
              className="backdrop-blur-xl rounded-3xl shadow-2xl p-8 border transform rotate-2 hover:rotate-0 transition-transform duration-700" 
              style={{ backgroundColor: `${customColors.cream}90`, borderColor: `${customColors.dustyRose}60` }}
            >
              <div 
                className="rounded-2xl p-6 font-mono text-sm border" 
                style={{ backgroundColor: customColors.primary, color: customColors.cream, borderColor: `${customColors.dustyRose}80` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="ml-2 opacity-80">Eagle IPTV Reseller Panel</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Active Subscriptions:</span>
                    <span className="font-bold" style={{ color: customColors.dustyRose }}>1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Revenue:</span>
                    <span className="font-bold" style={{ color: customColors.dustyRose }}>$24,850</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credits Available:</span>
                    <span className="font-bold text-yellow-300">5,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-3" style={{ borderColor: `${customColors.dustyRose}60` }}>
                    <span>Profit Margin:</span>
                    <span className="font-bold text-green-300">185%</span>
                  </div>
                  <div 
                    className="mt-4 p-2 rounded border" 
                    style={{ backgroundColor: `${customColors.dustyRose}30`, borderColor: `${customColors.dustyRose}60` }}
                  >
                    <span className="text-xs" style={{ color: customColors.cream }}>● System Status: ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-30 blur-xl animate-pulse" style={{ backgroundColor: customColors.dustyRose }}></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse delay-700" style={{ backgroundColor: customColors.primary }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

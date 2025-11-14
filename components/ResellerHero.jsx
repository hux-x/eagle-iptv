import React from 'react';
import { ExternalLink, Users, DollarSign, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

// Techy dark theme colors
const techColors = {
  dark: '#0a0a0f',
  darkCard: '#111118',
  accent: '#00d4ff',
  accentSecondary: '#ff006e',
  purple: '#8b5cf6',
  blue: '#06b6d4',
  orange: '#ff8c00',
  gray: '#1f2937',
  lightGray: '#6b7280',
  white: '#ffffff',
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ backgroundColor: techColors.dark }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,136,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,136,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ backgroundColor: `${techColors.accent}40` }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
        style={{ backgroundColor: `${techColors.purple}40` }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Eagle IPTV
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                IPTV Reseller Panel & Server Program
              </span>
            </h1>

            <p className="text-xl mb-10 leading-relaxed max-w-2xl text-gray-300">
              Join the <strong>best IPTV reseller program</strong> with <strong>Eagle IPTV</strong> — a 
              <strong> global IPTV provider</strong> and trusted <strong>IPTV supplier</strong> offering <strong>HD & 4K IPTV streaming</strong>, 
              <strong> reseller panels</strong>, and <strong>unlimited IPTV accounts</strong>.  
              Get <strong>bulk credits</strong>, <strong>subscription plans</strong>, and <strong>reseller pricing</strong> with 
              <strong> high profit margins up to 200%</strong>.  
              Manage <strong>unlimited clients</strong> through our <strong>IPTV panel</strong> and experience <strong>stable IPTV connections</strong>, 
              <strong> premium servers</strong>, and <strong>24/7 support</strong> via WhatsApp, Telegram, and live chat.  
              Whether you're launching an <strong>IPTV business</strong> or expanding as an <strong>IPTV reseller</strong>, 
              Eagle IPTV delivers reliability, scalability, and performance.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-4 rounded-xl border border-gray-700" style={{ backgroundColor: `${techColors.darkCard}80` }}>
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <div className="font-bold text-lg text-cyan-400">200% Profit</div>
                <div className="text-sm text-gray-400">High Reseller Margins</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-700" style={{ backgroundColor: `${techColors.darkCard}80` }}>
                <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="font-bold text-lg text-purple-400">∞ Clients</div>
                <div className="text-sm text-gray-400">Unlimited IPTV Accounts</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-700" style={{ backgroundColor: `${techColors.darkCard}80` }}>
                <Shield className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                <div className="font-bold text-lg text-pink-400">24/7</div>
                <div className="text-sm text-gray-400">WhatsApp, Telegram, Live Chat</div>
              </div>
              <div className="text-center p-4 rounded-xl border border-gray-700" style={{ backgroundColor: `${techColors.darkCard}80` }}>
                <Zap className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                <div className="font-bold text-lg text-orange-400">Instant Access</div>
                <div className="text-sm text-gray-400">IPTV Reseller Panel Login</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="group text-black px-10 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl border"
                style={{
                  background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.blue})`,
                  boxShadow: `0 0 30px ${techColors.accent}40`,
                  borderColor: techColors.accent,
                }}
              >
                🚀 Start Your IPTV Business
              </a>
              <Link
                href="/eagle-iptv-reselling-benefits"
                className="border-2 px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-gray-800 text-white"
                style={{
                  borderColor: `${techColors.purple}80`,
                  backgroundColor: `${techColors.darkCard}60`,
                }}
              >
                Benefits of Eagle IPTV Reseller Program
              </Link>
            </div>
          </div>

          {/* Visual / Illustration */}
          <div className="relative">
            <div
              className="rounded-3xl shadow-2xl p-12 border border-gray-700 text-center"
              style={{
                backgroundColor: `${techColors.darkCard}95`,
                backdropFilter: 'blur(20px)',
                boxShadow: `0 0 50px ${techColors.accent}20`,
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Choose Eagle IPTV Reseller Program?
              </h3>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li>✅ Flexible IPTV reseller pricing plans</li>
                <li>✅ Direct IPTV panel and instant reseller account</li>
                <li>✅ Bulk credits and volume discounts</li>
                <li>✅ Set your own retail prices</li>
                <li>✅ Manage unlimited IPTV clients easily</li>
                <li>✅ Stable servers with high uptime and smooth streaming</li>
                <li>✅ Access HD & 4K live channels worldwide</li>
                <li>✅ 24/7 support via WhatsApp, Telegram & live chat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

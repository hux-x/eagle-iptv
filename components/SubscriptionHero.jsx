
import React from "react";
import {
  Monitor,
  Play,
  Smartphone,
  Shield,
  Zap,
  TrendingUp,
  Calendar,
  Tv,
} from "lucide-react";
import Link from "next/link";
import FAQs from "./FAQs";
import PanelSubscriptions from "./PanelSubscriptions";

// Theme Colors (matching techy neon style)
const techColors = {
  dark: "#0a0a0f",
  darkCard: "#111118",
  accent: "#00d4ff",
  accentSecondary: "#ff006e",
  purple: "#8b5cf6",
  blue: "#06b6d4",
  orange: "#ff8c00",
  gray: "#1f2937",
  white: "#ffffff",
};

export default function EagleIPTVHero() {
  return (
    <div style={{ backgroundColor: techColors.dark }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,136,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,136,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating Glow Orbs */}
        <div
          className="absolute top-32 left-24 w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse"
          style={{ backgroundColor: `${techColors.blue}40` }}
        ></div>
        <div
          className="absolute bottom-16 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"
          style={{ backgroundColor: `${techColors.purple}40` }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  NEXON IPTV
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-3xl md:text-5xl">
                  Premium IPTV Provider
                </span>
              </h1>

              <p className="text-xl mb-10 leading-relaxed max-w-2xl text-gray-300">
                Experience ultra-stable IPTV streaming with{" "}
                <strong>daily updates</strong>,{" "}
                <strong>10,000+ live channels</strong>,{" "}
                <strong>85,000+ movies & series</strong>, and{" "}
                <strong>24/7 expert support</strong>.  
                <br />
                <span className="text-cyan-400">Your success is guaranteed with Nexon IPTV.</span>
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                <div
                  className="text-center p-4 rounded-xl border border-gray-700"
                  style={{ backgroundColor: `${techColors.darkCard}80` }}
                >
                  <Monitor className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <div className="font-bold text-lg text-cyan-400">10,000+</div>
                  <div className="text-sm text-gray-400">Live Channels</div>
                </div>
                <div
                  className="text-center p-4 rounded-xl border border-gray-700"
                  style={{ backgroundColor: `${techColors.darkCard}80` }}
                >
                  <Play className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="font-bold text-lg text-purple-400">85,000+</div>
                  <div className="text-sm text-gray-400">Movies & Series</div>
                </div>
                <div
                  className="text-center p-4 rounded-xl border border-gray-700"
                  style={{ backgroundColor: `${techColors.darkCard}80` }}
                >
                  <Zap className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                  <div className="font-bold text-lg text-orange-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div
                  className="text-center p-4 rounded-xl border border-gray-700"
                  style={{ backgroundColor: `${techColors.darkCard}80` }}
                >
                  <Shield className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <div className="font-bold text-lg text-pink-400">24/7</div>
                  <div className="text-sm text-gray-400">Expert Support</div>
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
                  📺 View Subscription Plans
                </a>
                <Link
                  href={"/"}
                  className="border-2 px-10 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-gray-800 text-white"
                  style={{
                    borderColor: `${techColors.purple}80`,
                    backgroundColor: `${techColors.darkCard}60`,
                  }}
                >
                  Become a Reseller
                </Link>
              </div>
            </div>

            {/* Visual Panel */}
            <div className="relative">
              <div
                className="rounded-3xl shadow-2xl p-10 border border-gray-700 text-center"
                style={{
                  backgroundColor: `${techColors.darkCard}95`,
                  boxShadow: `0 0 50px ${techColors.accent}20`,
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Nexon IPTV Features
                </h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li>✅ 10,000+ Live Channels</li>
                  <li>✅ 85,000+ Movies & Series (VOD)</li>
                  <li>✅ SD, HD, FHD & 4K Streaming</li>
                  <li>✅ Multi-Device Support</li>
                  <li>✅ Weekly Channel & Movie Updates</li>
                  <li>✅ Stable IPTV Servers</li>
                  <li>✅ 24/7 Customer Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <PanelSubscriptions />

      {/* FAQs */}
      <FAQs />

    
    </div>
  );
}

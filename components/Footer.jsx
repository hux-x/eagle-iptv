"use client"
import React from 'react';
import {  MessageCircle, Mail, ExternalLink, Heart, Terminal } from 'lucide-react';
// Techy dark theme colors
const techColors = {
  dark: '#0a0a0f',           // Deep dark background
  darkCard: '#111118',       // Card backgrounds
  accent: '#00d4ff',         // Bright cyan accent
  accentSecondary: '#ff006e', // Hot pink accent
  purple: '#8b5cf6',         // Purple for gradients
  blue: '#06b6d4',           // Cyan blue
  orange: '#ff8c00',         // Orange accent
  gray: '#1f2937',           // Dark gray
  lightGray: '#6b7280',      // Light gray text
  white: '#ffffff',          // Pure white
};

const Footer = () => {
  return (
    <footer className="text-white py-16 border-t border-gray-800" style={{ backgroundColor: techColors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg border border-gray-700" style={{ 
                background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.purple})`,
                boxShadow: `0 0 30px ${techColors.accent}40`
              }}>
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Eagle IPTV
              </span>
            </div>
            <p className="mb-8 max-w-md leading-relaxed text-gray-400">
              The premier IPTV reseller protocol trusted by digital entrepreneurs globally. 
              Deploy your profitable streaming enterprise with our comprehensive tech stack and dedicated support infrastructure.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-green-500" style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}>
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-blue-400" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}>
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-purple-400" style={{ 
                backgroundColor: `${techColors.purple}40`,
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}>
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-cyan-400">Navigation Tree</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />System Home</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />Feature Matrix</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />Pricing Protocol</a></li>
              <li><a href="#support" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />Support Channel</a></li>
              <li><a href="#terms" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-cyan-400 transition-colors flex items-center text-gray-400 group">
                <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-400">Initialize Connection</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400 group hover:text-cyan-400 transition-colors">
                <MessageCircle className="h-5 w-5 mr-3 text-cyan-400" />
                <span>WhatsApp Protocol</span>
              </div>
              <div className="flex items-center text-gray-400 group hover:text-blue-400 transition-colors">
                <MessageCircle className="h-5 w-5 mr-3 text-blue-400" />
                <span>Telegram Channel</span>
              </div>
              <div className="flex items-center text-gray-400 group hover:text-purple-400 transition-colors">
                <Mail className="h-5 w-5 mr-3 text-purple-400" />
                <span>support@eagleiptv.com</span>
              </div>
            </div>
            <button className="text-black px-8 py-3 rounded-xl transition-all w-full font-bold transform hover:scale-105 shadow-lg border" style={{ 
              background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.purple})`,
              borderColor: techColors.accent,
              boxShadow: `0 0 30px ${techColors.accent}40`
            }}>
              Deploy System
            </button>
          </div>
        </div>

        {/* System Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-red-400 mr-2 animate-pulse" />
            <p className="text-sm text-gray-400">
              © 2024 Eagle IPTV. Engineered with precision for global entrepreneurs.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm transition-colors hover:text-cyan-400 text-gray-400">Privacy</a>
            <a href="#terms" className="text-sm transition-colors hover:text-cyan-400 text-gray-400">Terms</a>
            <a href="#cookies" className="text-sm transition-colors hover:text-cyan-400 text-gray-400">Cookies</a>
            <a href="#contact" className="text-sm transition-colors hover:text-cyan-400 text-gray-400">Contact</a>
          </div>
        </div>

        {/* Tech Footer Animation */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <span>System Status:</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400">OPERATIONAL</span>
            <span className="mx-2">|</span>
            <span>Latency: 12ms</span>
            <span className="mx-2">|</span>
            <span>Nodes: 47 active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
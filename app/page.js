"use client"
import React from 'react';
import SubscriptionSection from '@/components/ResellerSubscriptions';
import { Menu, X, Play, Users, DollarSign, Shield, Zap, Globe, CheckCircle, Star, MessageCircle, Mail, Phone, ExternalLink, Heart } from 'lucide-react';
import HeroSection from '@/components/ResellerHero'
// Custom color styles
const customColors = {
  primary: '#5D688A',      // Muted blue-gray
  cream: '#FFF2EF',        // Warm cream
  dustyRose: '#E5BEB5'     // Dusty rose
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="backdrop-blur-lg sticky top-0 z-50 border-b" style={{ backgroundColor: `${customColors.primary}F0`, borderColor: `${customColors.dustyRose}80` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg" style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.primary})` }}>
                <span className="text-xl">🦅</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Eagle IPTV
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:opacity-80 px-3 py-2 text-sm font-medium transition-all">Home</a>
              <a href="#features" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-all">Features</a>
              <a href="#pricing" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-all">Pricing</a>
              <a href="#support" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-all">Support</a>
              <button className="text-white px-6 py-2 rounded-xl text-sm font-medium transition-all transform hover:scale-105 shadow-lg" style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.primary})` }}>
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-white hover:opacity-80 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#features" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium">Features</a>
              <a href="#pricing" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="#support" className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium">Support</a>
              <button className="text-white px-6 py-2 rounded-xl text-sm font-medium mt-2 w-full" style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.primary})` }}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};





// Footer Component
const Footer = () => {
  return (
    <footer className="text-white py-16 border-t" style={{ 
      backgroundColor: customColors.primary, 
      borderColor: `${customColors.dustyRose}40`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.cream})` }}>
                <span className="text-2xl">🦅</span>
              </div>
              <span className="text-3xl font-bold text-white">
                Eagle IPTV
              </span>
            </div>
            <p className="mb-8 max-w-md leading-relaxed" style={{ color: `${customColors.cream}C0` }}>
              The leading IPTV reseller program trusted by entrepreneurs worldwide. 
              Start your profitable streaming business with our comprehensive platform and dedicated support.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-700 p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="p-4 rounded-xl transition-all transform hover:scale-105 shadow-lg" style={{ backgroundColor: `${customColors.dustyRose}80` }}>
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: customColors.dustyRose }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Home</a></li>
              <li><a href="#features" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Features</a></li>
              <li><a href="#pricing" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Pricing</a></li>
              <li><a href="#support" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Support</a></li>
              <li><a href="#terms" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Terms of Service</a></li>
              <li><a href="#privacy" className="hover:opacity-80 transition-colors flex items-center" style={{ color: `${customColors.cream}C0` }}><ExternalLink className="h-4 w-4 mr-2" />Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xl font-bold mb-6" style={{ color: customColors.dustyRose }}>Get Started Today</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center" style={{ color: `${customColors.cream}C0` }}>
                <MessageCircle className="h-5 w-5 mr-3 text-green-400" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center" style={{ color: `${customColors.cream}C0` }}>
                <MessageCircle className="h-5 w-5 mr-3 text-blue-400" />
                <span>Telegram Support</span>
              </div>
              <div className="flex items-center" style={{ color: `${customColors.cream}C0` }}>
                <Mail className="h-5 w-5 mr-3" style={{ color: customColors.dustyRose }} />
                <span>support@eagleiptv.com</span>
              </div>
            </div>
            <button className="text-white px-8 py-3 rounded-xl transition-all w-full font-bold transform hover:scale-105 shadow-lg" style={{ background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.cream}40)` }}>
              Launch Your Business
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderColor: `${customColors.dustyRose}40` }}>
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-red-400 mr-2" />
            <p className="text-sm" style={{ color: `${customColors.cream}C0` }}>
              © 2024 Eagle IPTV. Made with love for entrepreneurs worldwide.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#privacy" className="text-sm transition-colors hover:opacity-80" style={{ color: `${customColors.cream}C0` }}>Privacy</a>
            <a href="#terms" className="text-sm transition-colors hover:opacity-80" style={{ color: `${customColors.cream}C0` }}>Terms</a>
            <a href="#cookies" className="text-sm transition-colors hover:opacity-80" style={{ color: `${customColors.cream}C0` }}>Cookies</a>
            <a href="#contact" className="text-sm transition-colors hover:opacity-80" style={{ color: `${customColors.cream}C0` }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: customColors.cream }}>
      <Navbar />
      <HeroSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default App;
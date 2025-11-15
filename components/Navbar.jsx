"use client"
import React from 'react';
import { Menu, X,Terminal, Code, Cpu, Network } from 'lucide-react';
import Link from 'next/link';
import MessageButton from './MessageButton';

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

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="backdrop-blur-xl sticky top-0 z-50 border-b border-gray-800" style={{ backgroundColor: `${techColors.dark}95` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg border border-gray-700" src='/logo.ico'
              />
          
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Eagle IPTV
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href={"/"} className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all relative group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
                <Link href={"/eagle-iptv-subscription"} className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all relative group">
                Get Subscription
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <Link href={"/eagle-iptv-reselling-benefits"} className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all relative group">
                Benefits of Reslling
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </Link>
              <MessageButton text='Start Reselling' message={"I want to start reselling with Eagle IPTV"} className="text-black px-6 py-2 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-lg border"
              />
               
              
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
              <Link href={"/"} className="text-white hover:text-cyan-400 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href={""} className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium">Get Subscription</Link>
   
              <Link href={"/eagle-iptv-reselling-benefits"} className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium">Benefits of Reselling</Link>
              <MessageButton text='Start Reselling' message={"I want to start reselling with Eagle IPTV"} className="text-black px-6 py-2 rounded-xl text-sm font-bold mt-2 w-full" style={{ 
                background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.blue})`
              }}/>
               
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
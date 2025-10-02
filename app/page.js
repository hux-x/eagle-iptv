import React from 'react';
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/ResellerHero';
import SubscriptionSection from '@/components/ResellerSubscriptions'
import Footer from '@/components/Footer';
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


// Footer Component


// Main App Component
const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: techColors.dark }}>
      <Navbar />
      <HeroSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default App;
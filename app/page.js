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

export const metadata = {
  title: 'Eagle IPTV Reseller Program | Start IPTV Business with 200% Profit Margin',
  description: 'Launch your IPTV reselling business with Eagle IPTV. Get reseller accounts, manage unlimited clients, 24/7 support, and earn up to 200% profit margins. Trusted IPTV supplier with instant panel access.',
   keywords: 'IPTV reseller, IPTV reseller program, IPTV business, IPTV supplier, IPTV provider, reseller accounts, IPTV subscription reselling, bulk IPTV credits, IPTV reseller panel, start IPTV business',
  openGraph: {
    title: 'Eagle IPTV Reseller Program - Start Your IPTV Business Today',
    description: 'Trusted IPTV supplier offering reseller accounts with 200% profit margins, unlimited clients, and 24/7 support. Launch your IPTV business now.',
    url: 'https://eagletvpanel.com',
    siteName: 'Eagle IPTV',
    images: [
      {
        url: 'https://eagletvpanel.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eagle IPTV Reseller Program'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle IPTV Reseller Program | 200% Profit Margins',
    description: 'Launch your IPTV reselling business with unlimited clients, instant panel access, and premium support.',
    images: ['https://eagletvpanel.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://eagletvpanel.com',
  },
}
// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Eagle IPTV',
  description: 'Premium IPTV reseller program and supplier',
  url: 'https://eagletvpanel.com',
  logo: 'https://eagletvpanel.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@eagleiptv.com',
    contactType: 'Customer Service',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://wa.me/yourwhatsappnumber',
    'https://t.me/yourtelegramchannel'
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '99',
    highPrice: '799',
    offerCount: '3'
  }
}
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IPTV Reseller Program',
  provider: {
    '@type': 'Organization',
    name: 'Eagle IPTV'
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IPTV Reseller Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Starter Protocol'
        },
        price: '99',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Matrix'
        },
        price: '299',
        priceCurrency: 'USD'
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise Node'
        },
        price: '799',
        priceCurrency: 'USD'
      }
    ]
  }
}


// Main App Component
const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: techColors.dark }}>
             <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default App;
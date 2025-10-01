import React from 'react';
import {  MessageCircle, Terminal, Network, Cpu, DollarSign, Users, Shield, Zap, CheckCircle,Globe,Star } from 'lucide-react';

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

// Subscription Plans Component
const SubscriptionSection = () => {
  const plans = [
    {
      name: "Starter Protocol",
      price: "$99",
      period: "100 Credits",
      features: [
        "Reseller Panel Access",
        "100 Credits Initialize",
        "Basic Support Channel",
        "Up to 150% ROI",
        "Email Protocol",
        "Perfect for Affordable IPTV reseller plans"
      ],
      popular: false,
      buttonText: "Deploy Starter",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      name: "Business Matrix",
      price: "$299", 
      period: "500 Credits",
      features: [
        "Full Panel Access",
        "500 Credits Loaded",
        "Priority Support Queue",
        "Up to 200% ROI",
        "WhatsApp API",
        "Custom Branding Kit",
        "Best IPTV reseller program for growth"
      ],
      popular: true,
      buttonText: "Initialize Matrix",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "Enterprise Node",
      price: "$799",
      period: "2000 Credits",
      features: [
        "Premium Node Access",
        "2000 Credits Preload",
        "24/7 Dedicated Channel",
        "Up to 200% ROI",
        "All Payment Gateways",
        "White-label System",
        "Full API Access",
        "Transparent pricing with unlimited scalability"
      ],
      popular: false,
      buttonText: "Launch Enterprise",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "High ROI Protocol",
      description: "Execute up to 200% profit margins on IPTV deployments with our competitive pricing model.",
      color: techColors.accent
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Unlimited Nodes", 
      description: "No client restrictions — scale your IPTV reseller account infinitely.",
      color: techColors.purple
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Admin Panel Access",
      description: "Manage subscriptions & credits via secure dashboard with simple pricing model.",
      color: techColors.blue
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Zero Infrastructure",
      description: "No VPS, servers, or technical deployment required. Even beginners can start their IPTV reseller business.", 
      color: techColors.accentSecondary
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Enterprise Uptime",
      description: "Premium server architecture with 99.9% SLA — reliable IPTV service guaranteed.",
      color: techColors.orange
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "10K+ Live TV & VOD channels worldwide with flexible IPTV reseller pricing tiers.",
      color: techColors.purple
    }
  ];

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: techColors.dark }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="text-center mb-20">
          
          

        </div>

        {/* Deployment Process */}
        <div className="text-center mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ⚡ How to start your IPTV Reselling Business With Eagle IPTV
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "1", title: "Initialize Connection", desc: "Connect via WhatsApp", icon: <MessageCircle className="w-6 h-6" /> },
              { step: "2", title: "Recieve Panel", desc: "Receive authenticated access to your IPTV reseller panel dashboard.", icon: <Terminal className="w-6 h-6" /> },
              { step: "3", title: "Execute Business", desc: "Launch subscriptions, manage clients, and scale operations with the best IPTV reseller program.", icon: <Zap className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="w-16 h-16 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform" style={{ 
                  background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.purple})`,
                  boxShadow: `0 0 30px ${techColors.accent}40`
                }}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Choose Your Deployment Package
          </h3>
          <p className="text-lg text-gray-400">
            Scale from startup to enterprise — optimized IPTV reseller pricing for every business tier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 ${plan.popular ? 'shadow-2xl scale-105' : 'hover:shadow-lg'}`}
              style={{
                background: plan.popular ? `linear-gradient(135deg, ${techColors.darkCard}, ${techColors.gray})` : `${techColors.darkCard}80`,
                borderColor: plan.popular ? techColors.accent : '#374151',
                backdropFilter: 'blur(20px)',
                boxShadow: plan.popular ? `0 0 50px ${techColors.accent}30` : 'none'
              }}>
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-bold flex items-center shadow-lg px-6 py-2 rounded-full border" style={{ 
                    background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.purple})`,
                    color: techColors.dark,
                    borderColor: techColors.accent
                  }}>
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    OPTIMAL CHOICE
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3" style={{ 
                    backgroundColor: `${plan.popular ? techColors.accent : techColors.purple}20`,
                    color: plan.popular ? techColors.accent : techColors.purple
                  }}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-400">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: techColors.accent }} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 px-6 rounded-2xl font-bold transition-all transform hover:scale-105 border"
                style={{
                  background: plan.popular ? `linear-gradient(135deg, ${techColors.accent}, ${techColors.purple})` : `${techColors.gray}60`,
                  color: plan.popular ? techColors.dark : techColors.white,
                  borderColor: plan.popular ? techColors.accent : techColors.lightGray
                }}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Section */}
      {/* Payment Section */}
        <div className="text-center px-4">
          <div className="p-6 md:p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto" style={{ 
            backgroundColor: `${techColors.darkCard}60`,
            backdropFilter: 'blur(20px)'
          }}>
            <p className="mb-6 text-base md:text-lg text-white">
              ✅ <strong className="text-cyan-400">Multi-Protocol Payments</strong> — Flexible payment options for IPTV reseller accounts
            </p>
            <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-400">
              <span className="flex items-center justify-center"><span className="text-2xl mr-2">💳</span>PayPal </span>
              <span className="flex items-center justify-center"><span className="text-2xl mr-2">🔗</span>Crypto</span>
              <span className="flex items-center justify-center"><span className="text-2xl mr-2">💰</span>Credit card</span>
              <span className="flex items-center justify-center"><span className="text-2xl mr-2">🏦</span>Bank transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;

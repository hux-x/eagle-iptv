import React from 'react';
import { Menu, X, Play, Users, DollarSign, Shield, Zap, Globe, CheckCircle, Star, MessageCircle, Mail, Phone, ExternalLink, Heart } from 'lucide-react';
const customColors = {
  primary: '#5D688A',      // Muted blue-gray
  cream: '#FFF2EF',        // Warm cream
  dustyRose: '#E5BEB5'     // Dusty rose
};
// Subscription Plans Component
const SubscriptionSection = () => {
  const plans = [
    {
      name: "Starter Pack",
      price: "$99",
      period: "100 Credits",
      features: [
        "Reseller Panel Access",
        "100 Credits to Start",
        "Basic Support",
        "Up to 150% Profit",
        "Email Support"
      ],
      popular: false,
      buttonText: "Start Small"
    },
    {
      name: "Business Pack",
      price: "$299",
      period: "500 Credits",
      features: [
        "Full Reseller Panel",
        "500 Credits Included",
        "Priority Support",
        "Up to 200% Profit",
        "WhatsApp Support",
        "Custom Branding"
      ],
      popular: true,
      buttonText: "Most Popular"
    },
    {
      name: "Enterprise Pack",
      price: "$799",
      period: "2000 Credits",
      features: [
        "Premium Panel Access",
        "2000 Credits Included",
        "24/7 Dedicated Support",
        "Up to 200% Profit",
        "All Payment Methods",
        "White-label Solution",
        "API Access"
      ],
      popular: false,
      buttonText: "Scale Big"
    }
  ];

  const features = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "High Profit Margins",
      description: "Earn up to 200% profit reselling IPTV services"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Unlimited Clients",
      description: "No restrictions on how many customers you can add"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reseller Panel Access",
      description: "Manage subscriptions & credits in one dashboard"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "No VPS Required",
      description: "No servers, no technical skills needed"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Reliable Streaming",
      description: "Premium servers with 99.9% uptime"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Coverage",
      description: "1000s of Live TV & VOD channels worldwide"
    }
  ];

  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: customColors.cream }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
     

        {/* Pricing Plans */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: customColors.primary }}>
            Choose Your Reseller Package
          </h3>
          <p className="text-lg" style={{ color: `${customColors.primary}B0` }}>
            Start small or go big - we have plans for every business size
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 ${
                plan.popular
                  ? 'text-white shadow-2xl scale-105'
                  : 'backdrop-blur hover:shadow-lg'
              }`}
              style={{
                background: plan.popular 
                  ? `linear-gradient(135deg, ${customColors.primary}, ${customColors.dustyRose})`
                  : `${customColors.cream}80`,
                borderColor: plan.popular ? 'transparent' : `${customColors.dustyRose}60`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="text-sm font-bold flex items-center shadow-lg px-6 py-2 rounded-full" style={{ 
                    background: `linear-gradient(135deg, ${customColors.dustyRose}, ${customColors.cream})`,
                    color: customColors.primary
                  }}>
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : ''}`} style={{ color: plan.popular ? 'white' : customColors.primary }}>
                  {plan.name}
                </h3>
                <div className={`text-5xl font-bold mb-2 ${plan.popular ? 'text-white' : ''}`} style={{ color: plan.popular ? 'white' : customColors.primary }}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.popular ? 'opacity-80' : ''}`} style={{ color: plan.popular ? 'white' : `${customColors.primary}80` }}>
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-300' : ''}`} style={{ color: plan.popular ? '#86efac' : customColors.dustyRose }} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : ''}`} style={{ color: plan.popular ? 'white' : `${customColors.primary}C0` }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-4 px-6 rounded-2xl font-bold transition-all transform hover:scale-105"
                style={{
                  background: plan.popular 
                    ? `${customColors.cream}E0`
                    : `linear-gradient(135deg, ${customColors.primary}, ${customColors.dustyRose})`,
                  color: plan.popular ? customColors.primary : 'white'
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="p-8 backdrop-blur rounded-2xl border inline-block" style={{ 
            backgroundColor: `${customColors.dustyRose}20`, 
            borderColor: `${customColors.dustyRose}40`
          }}>
            <p className="mb-6 text-lg" style={{ color: customColors.primary }}>
              ✅ <strong>Flexible Payments</strong> — Multiple payment options available
            </p>
            <div className="flex justify-center space-x-8" style={{ color: `${customColors.primary}80` }}>
              <span className="flex items-center"><span className="text-2xl mr-2">💳</span>Credit Cards</span>
              <span className="flex items-center"><span className="text-2xl mr-2">🔗</span>Crypto</span>
              <span className="flex items-center"><span className="text-2xl mr-2">💰</span>PayPal</span>
              <span className="flex items-center"><span className="text-2xl mr-2">🏦</span>Bank Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection
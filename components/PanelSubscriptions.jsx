
import React from 'react';
import MessageButton from './MessageButton';
const PanelSubscriptionPlans = [

  {
    name: "Quarterly",
    price: "€25",
    period: "per 3 months",
    description: "Best value for short-term users with premium access",
    features: [
      "17,200+ Live Channels",
      "120,000+ Movies",
      "20,000+ Series",
      "4K / HD Quality",
      "Premium Support",
      "24/7 Customer Support"
    ],
    popular: false
  },
  {
    name: "Six Months",
    price: "€40",
    period: "per 6 months",
    description: "Great choice for consistent IPTV experience at low cost",
    features: [
      "17,200+ Live Channels",
      "120,000+ Movies",
      "20,000+ Series",
      "4K / HD Quality",
      "Premium Support",
      "24/7 Customer Support"
    ],
    popular: false
  },
  {
    name: "Yearly",
    price: "€70",
    period: "per year",
    description: "Most popular plan with maximum savings & premium features",
    features: [
      "17,200+ Live Channels",
      "120,000+ Movies",
      "20,000+ Series",
      "4K / HD Quality",
      "Premium Support",
      "24/7 Customer Support"
    ],
    popular: true
  }
];
export default function Subscriptions() {
  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Nexon IPTV Subscriptions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the best <span className="text-blue-400 font-semibold">Nexon IPTV subscription</span> that fits your streaming needs.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PanelSubscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                plan.popular
                  ? "border-purple-500 shadow-lg shadow-purple-500/20"
                  : "border-gray-800 hover:border-blue-500/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <MessageButton
                message={`I’m interested in the ${plan.name} plan`}
                text="Get Started"
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md hover:shadow-purple-500/25"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 hover:border-blue-500"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

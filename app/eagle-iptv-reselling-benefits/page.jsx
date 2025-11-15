import React from "react";
import {
  DollarSign,
  Users,
  Shield,
  Zap,
  Award,
  Headphones,
  Globe,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

// ✅ SEO Metadata
export const metadata = {
  title: "Benefits of Reselling with Eagle IPTV | IPTV Reseller Program",
  description:
    "Discover the benefits of joining the Eagle IPTV Reseller Program. Earn high profit margins, manage unlimited clients, enjoy 24/7 support, and grow your IPTV business with a trusted IPTV supplier.",
  keywords: [
    "Eagle IPTV",
    "IPTV reseller program",
    "IPTV business",
    "IPTV supplier",
    "IPTV provider",
    "IPTV reseller accounts",
    "IPTV credits",
    "subscription reselling",
    "unlimited IPTV clients",
    "IPTV reseller panel",
    "IPTV profit margins",
    "24/7 IPTV support",
    "start IPTV business",
    "best IPTV reseller program",
  ],
  openGraph: {
    title: "Benefits of Reselling with Eagle IPTV | IPTV Reseller Program",
    description:
      "Launch your IPTV business with Eagle IPTV. High profit margins, unlimited clients, reseller accounts, and 24/7 support with stable IPTV connections.",
    url: "https://yourdomain.com/eagle-iptv-reselling-benifits",
    siteName: "Eagle IPTV",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eagle IPTV Reseller Program",
      },
    ],
    type: "website",
  },
};

// Dark theme colors
const techColors = {
  dark: "#0a0a0f",
  darkCard: "#111118",
  accent: "#00d4ff",
  accentSecondary: "#ff006e",
  purple: "#8b5cf6",
  blue: "#06b6d4",
  orange: "#ff8c00",
  white: "#ffffff",
};

const BenefitsPage = () => {
  return (
    <main style={{ backgroundColor: techColors.dark }}>
      <Navbar />

      {/* Hero Section */}
      <header className="relative py-24 text-center overflow-hidden">
        {/* Gradient accents */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top left, ${techColors.accent}15, transparent 50%),
                         radial-gradient(circle at bottom right, ${techColors.purple}15, transparent 50%)`,
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Benefits of Reselling with Eagle IPTV
          </h1>
    
        </div>
      </header>

      {/* What is IPTV Reselling */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          What is IPTV Reselling?
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg text-center max-w-3xl mx-auto">
          IPTV Reselling is the process of purchasing IPTV credits or
          subscriptions in bulk from a trusted IPTV provider like{" "}
          <strong>Eagle IPTV</strong>, and then reselling them to your own
          customers. With our reseller program, you gain instant access to an{" "}
          <strong>IPTV panel</strong> where you can create accounts, manage
          subscriptions, and monitor your clients with ease.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid gap-16">
        {[
          {
            icon: <DollarSign className="w-12 h-12 text-cyan-400" />,
            title: "High Profit Margins",
            desc: "Earn up to 200% profit by reselling IPTV subscriptions. Set your own prices and maximize revenue while offering premium IPTV services.",
          },
          {
            icon: <Users className="w-12 h-12 text-purple-400" />,
            title: "Unlimited Clients",
            desc: "Our IPTV reseller accounts let you add and manage unlimited clients, giving you the freedom to grow without restrictions.",
          },
          {
            icon: <Zap className="w-12 h-12 text-orange-400" />,
            title: "Instant Reseller Panel Access",
            desc: "Get instant IPTV reseller panel access to manage accounts, subscriptions, and credits with ease.",
          },
          {
            icon: <Shield className="w-12 h-12 text-pink-400" />,
            title: "Reliable IPTV Connections",
            desc: "Eagle IPTV guarantees stable IPTV connections, high uptime, and premium infrastructure for a seamless viewing experience.",
          },
          {
            icon: <Headphones className="w-12 h-12 text-blue-400" />,
            title: "24/7 Dedicated Support",
            desc: "Enjoy round-the-clock assistance via WhatsApp, Telegram, and live chat to keep your IPTV business running smoothly.",
          },
          {
            icon: <Award className="w-12 h-12 text-yellow-400" />,
            title: "Trusted IPTV Supplier",
            desc: "With 10+ years of industry experience, Eagle IPTV is a trusted IPTV provider serving thousands of resellers worldwide.",
          },
        ].map((benefit, idx) => (
          <article
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-lg transition-transform hover:scale-[1.02]`}
            style={{ backgroundColor: `${techColors.darkCard}95` }}
          >
            <div className="flex-shrink-0">{benefit.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                {benefit.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{benefit.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Why Choose Eagle IPTV?
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Affordable IPTV Plans",
              desc: "Choose from competitive IPTV reseller plans designed for flexibility and profitability.",
              icon: "💰",
            },
            {
              title: "Bulk IPTV Credits",
              desc: "Get volume discounts when purchasing IPTV credits in bulk for maximum margins.",
              icon: "📦",
            },
            {
              title: "Flexible Payments",
              desc: "Pay easily via Crypto, PayPal, Bank Transfer, or Credit Card with global support.",
              icon: "💳",
            },
            {
              title: "Free Trial IPTV",
              desc: "Let your clients test before buying — offer free trial IPTV accounts instantly.",
              icon: "🎁",
            },
            {
              title: "Transparent Program",
              desc: "No hidden fees, no complicated terms. Our reseller program is simple and clear.",
              icon: "✅",
            },
            {
              title: "Worldwide Coverage",
              desc: "Eagle IPTV supports clients across the globe with stable servers in multiple regions.",
              icon: "🌍",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-gray-700 backdrop-blur shadow-lg hover:shadow-cyan-500/20 transition-transform hover:-translate-y-2"
              style={{ backgroundColor: "rgba(17,17,24,0.95)" }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is Eagle IPTV?",
              a: "Eagle IPTV is a premium IPTV provider offering thousands of live channels, movies, and TV shows. We provide high-quality, stable connections worldwide.",
            },
            {
              q: "What is an IPTV Reseller?",
              a: "An IPTV reseller purchases IPTV credits or subscriptions in bulk from a provider and sells them to clients at their own price, keeping the profit.",
            },
            {
              q: "How do I get started as a reseller?",
              a: "Simply join our reseller program, purchase credits, and gain access to your own IPTV panel where you can manage clients and subscriptions.",
            },
            {
              q: "How much profit can I earn?",
              a: "Many resellers earn 100-200% profit margins, depending on how they price and market their IPTV subscriptions.",
            },
            {
              q: "Is technical knowledge required?",
              a: "No. Our reseller panel is user-friendly, and our 24/7 support team is here to assist you anytime.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-700 shadow-lg"
              style={{ backgroundColor: "rgba(17,17,24,0.95)" }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        id="join"
        className="py-16 text-center"
        style={{
          background: `linear-gradient(135deg, ${techColors.accent}20, ${techColors.purple}20)`,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your IPTV Business?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the Eagle IPTV Reseller Program today and gain instant panel
          access, unlimited client management, and high-margin reselling
          opportunities with 24/7 support.
        </p>
        <Link
          href={"/"}
          className="px-12 py-5 rounded-2xl font-bold text-lg shadow-xl transition-transform hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${techColors.accent}, ${techColors.blue})`,
            color: techColors.dark,
          }}
        >
          🚀 Start Reselling
        </Link>
        
      </div>
      <Footer/>

    </main>
  );
};

export default BenefitsPage;

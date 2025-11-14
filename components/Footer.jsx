"use client";
import React from "react";
import { Terminal, Mail, MessageCircle } from "lucide-react";

const techColors = {
  dark: "#0a0a0f",
  accent: "#00d4ff",
  white: "#ffffff",
};

export default function Footer() {
  return (
    <footer
      className="text-white py-12 border-t border-gray-800"
      style={{ backgroundColor: techColors.dark }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-gray-900 border border-gray-700">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold">Eagle IPTV</h2>
            </div>
            <p className="text-gray-400 max-w-sm">
              Simple and reliable IPTV services for global users. High-quality
              streaming with stable performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-cyan-400" href="#home">Home</a></li>
              <li><a className="hover:text-cyan-400" href="#pricing">Pricing</a></li>
              {/* removed features */}
              {/* removed contact */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-3 text-cyan-400">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href="https://wa.me/923434796162" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-cyan-400"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-cyan-400" />
                +923434796162
              </a>

              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                support@eagleiptv.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Eagle IPTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

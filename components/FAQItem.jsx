"use client"
import { useState } from "react";
import {  ChevronDown } from "lucide-react";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-900/30 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};
export default FAQItem;
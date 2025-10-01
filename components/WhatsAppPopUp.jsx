'use client';
import React from 'react';
import ReactDOM from 'react-dom';

const WhatsAppPopUp = ({ visible, onClose, message }) => {
  if (!visible) return null;

  const generat_text =
    "You’ll be connected to our WhatsApp representative who will provide you with all the details you need to get started.";

  // Encode the custom message
  const encodedMessage = encodeURIComponent(
    message || "Hi, I’d like to know more about your service."
  );

  const popupContent = (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-black text-red max-w-md w-full p-6 rounded-2xl border border-purple-500 shadow-2xl text-center relative animate-fade-in-up">
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-purple-500">
          Let&apos;s Get You Set Up
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          {generat_text}
        </p>
        <a
          href={`https://wa.me/923434796162?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-400 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Talk to Our Representative
        </a>
      </div>
    </div>
  );

  // Render inside portal at document.body
  return ReactDOM.createPortal(popupContent, document.body);
};

export default WhatsAppPopUp;

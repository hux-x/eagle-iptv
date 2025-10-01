'use client'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppPopUp from "./WhatsAppPopUp"; // Adjust path as needed

const FloatingWhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {/* Tooltip bubble */}
        <div className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg animate-pulse">
          Need help setting it up?
        </div>

        {/* WhatsApp icon triggers popup */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl animate-bounce-slow"
          aria-label="Open WhatsApp Setup Help"
        >
          <FaWhatsapp className="w-6 h-6" />
        </button>
      </div>

      {/* Popup shown on icon click */}
      <WhatsAppPopUp visible={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default FloatingWhatsAppButton;

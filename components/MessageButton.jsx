'use client';

import { useState } from 'react';
import WhatsAppPopUp from './WhatsAppPopUp';

export default function MessageButton({text = 'Get in touch', className = '',message}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className={className}
      >
        {text}
      </button>

      <WhatsAppPopUp visible={showPopup} message={message} onClose={() => setShowPopup(false)} />
    </>
  );
}

'use client';

import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971586453671"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[99] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
import React from "react";
import { Phone } from "lucide-react";

const ContactForm = () => (
  <div className="w-full flex flex-col items-center">
    {/* Section Heading */}
    <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-2 text-center">Let's work together</h2>
    {/* Description Paragraph */}
    <p className="text-gray-400 text-base mb-8 text-center max-w-xl">Ready to discuss your project? Book a call with me and let's bring your ideas to life!</p>
    
    {/* Book Call Button */}
    <div className="mt-2">
      <a
        href="tel:+254796530452"
        className="btn btn-primary bg-gradient-to-r from-[#ff4d4f] to-[#ffb86c] text-white border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-3 text-lg flex items-center gap-2 mx-auto"
      >
        <Phone className="w-5 h-5" /> Book a call
      </a>
    </div>
  </div>
);

export default ContactForm;
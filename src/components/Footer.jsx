import React from "react";
import avatar from "../assets/avater.svg";
import { Linkedin, Instagram } from "lucide-react";
import avater from "../assets/avater.svg";

const Footer = () => (
  <footer className="w-full pt-14 pb-6 px-4 bg-[#101114] relative overflow-hidden">
    {/* Dotted pattern background */}
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "18px 18px", zIndex: 0 }} />
    <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
      {/* Profile Picture */}
      <div className="w-16 h-16 rounded-full bg-[#23242a] flex items-center justify-center mb-3 overflow-hidden border-2 border-[#23242a]">
        <img src={avatar} alt="avater" className="object-cover" />
      </div>
      {/* Name and Title */}
      <div className="text-white font-bold text-lg">Hamisi Abdalla</div>
      <div className="text-gray-400 text-base mb-8">Full-stack Developer & UI/UX Designer</div>
      {/* Contact Info Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
        {/* Call me on */}
        <div>
          <div className="text-gray-400 text-sm mb-1">Call me on</div>
          <div className="text-white font-medium">+254796530452</div>
        </div>
        {/* Email me at */}
        <div>
          <div className="text-gray-400 text-sm mb-1">Email me at</div>
          <div className="text-white font-medium">mwapodzoh6@gmail.com</div>
        </div>
        {/* Follow me on */}
        <div>
          <div className="text-gray-400 text-sm mb-1">Follow me on</div>
          <div className="flex justify-center gap-4 mt-1">
            {/* GitHub */}
            <a href="https://github.com/Bwanakali254" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hamisi-hamisi-410a002a8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/iammr_goodlife/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Copyright/Credits */}
      <div className="text-gray-500 text-xs text-center mt-2">
        All Copyrights reserved &copy; {new Date().getFullYear()} Hamisi Abdalla
      </div>
    </div>
  </footer>
);

export default Footer; 
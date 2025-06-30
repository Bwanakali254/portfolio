import React from "react";

const Hero = () => (
  <div className="w-full flex flex-col items-start text-left gap-4 max-w-[700px] pt-1 pb-4 px-6 mx-auto">
    {/* Small Heading */}
    <div className="flex items-center gap-2 text-base font-medium text-white/90 ">
      <span className="text-2xl">👋</span>
      <span>Hello I am,</span>
    </div>
    {/* Main Headline */}
    <h1 className="font-serif text-5xl md:text-6xl text-[#e5e5e5] leading-tight">
    Web Developer | IT Support
    </h1>
    {/* Description Paragraph */}
    <p className="text-lg text-gray-400 max-w-2xl mb-3">
    Full-stack developer with IT expertise—building responsive web apps and handling hardware, software, and network support with precision.
    </p>
    {/* Buttons Row */}
    <div className="flex gap-4 mt-1">
      <a
        href="tel:+254796530452"
        className="btn btn-primary bg-[#e5ecf7] text-[#18191c] border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-2 text-base"
      >
        Hire me
      </a>
      <a
        href="#previous"
        className="btn btn-secondary bg-transparent text-[#e5e5e5] border border-[#444] hover:bg-[#18191c] font-semibold px-8 py-2 text-base"
      >
        Discover my journey
      </a>
    </div>
  </div>
);

export default Hero;
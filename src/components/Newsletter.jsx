import React from "react";

const Newsletter = () => (
  <div className="w-full flex flex-col items-center">
    {/* Section Heading */}
    <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-2 text-center">Stay updated with my latest work</h2>
    {/* Description Paragraph */}
    <p className="text-gray-400 text-base mb-8 text-center max-w-xl">Receive monthly updates, new projects, and exclusive content. No spam, just the good stuff!</p>
    {/* Newsletter Form */}
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[400px] justify-center items-center">
      <input type="email" placeholder="Enter your email address" className="input flex-1" />
      <button className="btn btn-primary bg-gradient-to-r from-[#c0d5f9] to-[#a3b8d8] text-[#18191c] border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-2 text-base w-full sm:w-auto" type="submit">Subscribe</button>
    </form>
  </div>
);

export default Newsletter; 
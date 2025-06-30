import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sothsideCeo from "../assets/Testimonial/sothside ceo.jpg";

// Client avatars: first is your real image, rest are placeholders
const clientAvatars = [
  sothsideCeo,
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

const testimonials = [
  {
    quote: "Amazing work! Delivered on time and exceeded expectations.",
    name: "Mohammed",
    title: "CEO of southsideclothing",
    avatar: clientAvatars[0],
  },
  {
    quote: "Professional, creative, and reliable. Highly recommended!",
    name: "Jay MatsuS",
    title: "Full-stack developer",
    avatar: clientAvatars[1],
  },
  {
    quote: "A pleasure to work with. The results were outstanding!",
    name: "Sarah Lee",
    title: "Product Lead at Grapho",
    avatar: clientAvatars[2],
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[index];

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col items-start gap-8 px-6">
      {/* Heading */}
      <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-2">See what clients think of my work</h2>
      {/* Trusted by industry leaders row */}
      <div className="flex items-center mb-6">
        <div className="flex -space-x-4">
          {clientAvatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="client"
              className={`w-10 h-10 rounded-full border-2 border-[#23242a] object-cover z-${10 - i} bg-[#18191c]`}
              style={{ zIndex: 10 - i }}
            />
          ))}
        </div>
        <span className="text-gray-400 text-base ml-6">Trusted by industry leaders</span>
      </div>
      {/* Testimonial Slider */}
      <div className="w-full flex justify-center items-center mt-2">
        {/* Left Arrow */}
        <button onClick={prev} className="p-2 rounded-full hover:bg-[#23242a] transition mr-2">
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
        {/* Testimonial Card */}
        <div className="bg-[#18191c] rounded-2xl shadow-lg border border-[#23242a] px-8 py-4 flex flex-col items-center max-w-xl w-full mx-2">
          <div className="text-xl text-white font-serif text-center mb-4">“{t.quote}”</div>
          <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#23242a] object-cover mb-2" />
          <div className="text-white font-semibold text-lg text-center">{t.name}</div>
          <div className="text-gray-400 text-sm text-center">{t.title}</div>
        </div>
        {/* Right Arrow */}
        <button onClick={next} className="p-2 rounded-full hover:bg-[#23242a] transition ml-2">
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials; 
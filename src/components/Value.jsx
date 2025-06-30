import React from "react";
import avatar from "../assets/avater.svg";
import html5Logo from "../assets/logo/html5.svg";
import jsLogo from "../assets/logo/javascript.svg";
import reactLogo from "../assets/logo/React.svg";
import tailwindLogo from "../assets/logo/tailwindcss.svg";
import nodejsLogo from "../assets/logo/nodejs.svg";
import expressLogo from "../assets/logo/express-js.svg";
import mongodbLogo from "../assets/logo/mongodb.svg";
import firebaseLogo from "../assets/logo/firebase.svg";
import supabaseLogo from "../assets/logo/supabase.svg";

// Placeholder SVGs for design tools

const backendIcons = [
  { src: nodejsLogo, alt: "Node.js" },
  { src: expressLogo, alt: "Express.js" },
  { src: mongodbLogo, alt: "MongoDB" },
  { src: firebaseLogo, alt: "Firebase" },
  { src: supabaseLogo, alt: "Supabase" },
];

const techIcons = [
  { src: html5Logo, alt: "HTML5" },
  { src: jsLogo, alt: "JavaScript" },
  { src: reactLogo, alt: "React" },
  { src: tailwindLogo, alt: "Tailwind CSS" },
];


const Value = () => (
  <div className="w-full flex flex-col items-center gap-10">
    {/* Top: Profile, Experience, Heading, Summary, Buttons */}
    <div className="flex flex-col items-center relative w-full">
      {/* Profile and Experience Row */}
      <div className="flex items-center gap-4 mb-2">
        {/* Profile Picture */}
        <div className="w-28 h-28 rounded-full bg-[#23242a] flex items-center justify-center overflow-hidden shadow-lg">
          <img src={avatar} alt="Avatar" className="object-cover" />
        </div>
        {/* Animated Arrow Loader */}
        <div className="flex flex-col items-center">
          <span className="loading block">
            <svg width="64" height="48" className="block">
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className="arrow-back" />
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" className="arrow-front" />
            </svg>
          </span>
          <span className="text-base text-[#bfc9db] font-semibold mt-1">1+ years of<br />experience</span>
        </div>
      </div>
      {/* Main Heading */}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#e5e5e5] text-center mt-4 mb-2">My unique <br />Value?</h2>
      {/* Summary Paragraph */}
      <p className="text-gray-400 text-lg text-center max-w-2xl mb-6">I thrive in fast-paced environments, continuously learning and evolving to bridge the gap between design intent and technical execution.</p>
      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-2 mb-4">
        {/* Download Resume Button */}
        <a
          href="/src/assets/Resume/Resume.pdf"
          download
          className="btn btn-primary bg-[#e5ecf7] text-[#18191c] border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-2 text-base flex items-center gap-2"
        >
          {/* Download Icon (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l-6-6m6 6l6-6" />
          </svg>
          Download resume
        </a>
        <a
          href="#showcase"
          className="btn btn-secondary bg-transparent text-[#e5e5e5] border border-[#444] hover:bg-[#18191c] font-semibold px-8 py-2 text-base"
        >
          Browse my work
        </a>
      </div>
    </div>
    {/* Bottom: Two Cards */}
    <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-stretch">
      {/* Card 1: Front-end development */}
      <div className="flex-1 bg-[#18191c] rounded-2xl border border-[#23242a] shadow-lg p-8 flex flex-col justify-between min-w-[260px] max-w-[400px] mx-auto">
        <div>
          <div className="font-serif text-2xl text-white mb-2">Front-end development</div>
          <div className="text-gray-400 text-base mb-6">Expert in HTML, CSS, React, Vue, and JavaScript, crafting responsive, high-performance websites.</div>
        </div>
        <div className="flex gap-3 mt-auto">
          {techIcons.map((icon, i) => icon.src ? (
            <img key={i} src={icon.src} alt={icon.alt} className="h-7 w-7 object-contain" />
          ) : (
            <span key={i}>{icon.svg}</span>
          ))}
        </div>
      </div>
      {/* Back-end development */}
      <div className="flex-1 bg-[#18191c] rounded-2xl border border-[#23242a] shadow-lg p-8 flex flex-col justify-between min-w-[260px] max-w-[400px] mx-auto">
        <div>
          <div className="font-serif text-2xl text-white mb-2">Back-end development</div>
          <div className="text-gray-400 text-base mb-6">
            Skilled in building robust server-side applications, APIs, and managing databases for scalable web solutions.
          </div>
        </div>
        <div className="flex gap-3 mt-auto">
          {backendIcons.map((icon, i) => (
            <img key={i} src={icon.src} alt={icon.alt} className="h-7 w-7 object-contain" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Value; 
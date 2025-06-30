import React from "react";
import html5Logo from "../assets/logo/html5.svg";
import jsLogo from "../assets/logo/javascript.svg";
import reactLogo from "../assets/logo/React.svg";
import tailwindLogo from "../assets/logo/tailwindcss.svg";
import nodejsLogo from "../assets/logo/nodejs.svg";
import expressLogo from "../assets/logo/express-js.svg";
import firebaseLogo from "../assets/logo/firebase.svg";
import supabaseLogo from "../assets/logo/supabase.svg";
import mongodbLogo from "../assets/logo/mongodb.svg";

const brands = [
  { name: "HTML5", icon: html5Logo },
  { name: "JavaScript", icon: jsLogo },
  { name: "React", icon: reactLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "Node.js", icon: nodejsLogo },
  { name: "Express.js", icon: expressLogo },
  { name: "Firebase", icon: firebaseLogo },
  { name: "Supabase", icon: supabaseLogo },
  { name: "MongoDB", icon: mongodbLogo },
];

const total = brands.length;

const TrustedBrands = () => (
  <div className="w-full flex flex-col items-center overflow-hidden">
    {/* Section Heading */}
    <div className="mb-2">
      <span className="text-gray-300 text-base font-medium tracking-wide text-center block">Languages & Tools</span>
    </div>
    {/* Animated Brands Row */}
    <div className="relative w-full max-w-4xl overflow-hidden">
      <div className="flex gap-10 animate-scroll-x-reverse items-center" style={{ width: 'max-content' }}>
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center transition duration-300"
            style={{ transition: 'all 0.3s cubic-bezier(.4,0,.2,1)' }}
          >
            <img src={brand.icon} alt={brand.name} className="h-10 w-10 object-contain mb-2" />
            <span className="text-gray-400 text-sm font-semibold mt-1">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustedBrands; 
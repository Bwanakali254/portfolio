import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
  {
    icon: "🏛️",
    title: "Junior Network Engineer",
    subtitle: "County Government of Kwale",
    roles: [
      "Hardware troubleshooting, repair and maintenance.",
      "Basic Windows Server R12 installation, configuration and administration.",
      "Setting-up and managing Wireless Access Points.",
      "Network management, maintenance and troubleshooting.",
      "Basic Wireless security.",
      "Basics on CMS website development and administration.",
      "Information System (IFMIS) configuration and administration."
    ]
  },
  {
    icon: "🧥",
    title: "Senior Web Developer",
    subtitle: "Southside Clothing",
    roles: [
      "Solely responsible for the design, development, and maintenance of the company's e-commerce website.",
      "Worked directly with the store owner to translate business needs into technical solutions.",
      "Implemented secure payment systems, inventory management, and customer engagement features.",
      "Optimized site performance, SEO, and mobile responsiveness for a seamless shopping experience."
    ]
  }
];

const PreviousLife = () => {
  // State to track which job is expanded
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for expanding/collapsing
  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col items-start gap-8 px-6">
      {/* Heading */}
      <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-2">In a previous life</h2>
      {/* Paragraph */}
      <p className="text-gray-400 text-base mb-4 max-w-2xl">I've had the privilege of working with some amazing teams and brands, building my skills and experience along the way.</p>
      {/* Experience Cards */}
      <div className="w-full flex flex-col gap-0">
        {jobs.map((job, i) => (
          <div key={i} className="w-full">
            {/* Job Row */}
            <button
              className="w-full flex items-center py-5 px-0 border-0 border-b border-[#23242a] last:border-b-0 focus:outline-none bg-transparent"
              onClick={() => handleToggle(i)}
              aria-expanded={openIndex === i}
            >
              {/* Icon */}
              <span className="text-2xl mr-4">{job.icon}</span>
              {/* Title & Subtitle */}
              <div className="flex-1 flex flex-col text-left">
                <span className="font-semibold text-white text-lg">{job.title}</span>
                <span className="text-gray-400 text-sm">{job.subtitle}</span>
              </div>
              {/* Dropdown Arrow */}
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {/* Collapsible Roles */}
            <div
              className={`overflow-hidden transition-all duration-300 bg-[#202127] ${openIndex === i ? 'max-h-40 py-3 px-6 border-b border-[#23242a]' : 'max-h-0 py-0 px-6'}`}
              style={{ transitionProperty: 'max-height, padding' }}
            >
              {openIndex === i && (
                <ul className="list-disc text-gray-300 text-sm pl-4">
                  {job.roles.map((role, j) => (
                    <li key={j} className="mb-1">{role}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousLife; 
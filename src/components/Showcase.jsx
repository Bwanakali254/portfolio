import React, { useState } from "react";
import entServicesImg from "../assets/projects/Ent Services.png";

const projects = [
  {
    img: entServicesImg,
    title: "ENT Services",
    description: "Premier travel and lifestyle brand offering curated trips, reliable transfers, and premium gear in Kenya.",
    link: "https://ent-services.vercel.app/",
    button: "Visit ENT Services"
  },
];

const Showcase = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-8 text-center">Showcasing my best work</h2>
      {/* Project Cards */}
      <div className="w-full flex flex-col gap-8 max-w-2xl">
        {visibleProjects.map((p, i) => (
          <div key={i} className="bg-[#18191c] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border border-[#23242a]">
            <img src={p.img} alt={p.title} className="w-full h-auto object-cover" />
            <div className="p-6 w-full flex flex-col items-center">
              <div className="font-serif text-2xl text-white mb-2 text-center">{p.title}</div>
              {p.description && <div className="text-gray-400 text-base mb-4 text-center">{p.description}</div>}
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-gradient-to-r from-[#ff4d4f] to-[#ffb86c] text-white border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-2 text-base">
                  {p.button || "View Project"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Load More / Show Less Button */}
      {projects.length > 2 && (
        !showAll ? (
          <button
            className="btn btn-secondary bg-transparent text-[#e5e5e5] border border-[#444] hover:bg-[#18191c] font-semibold px-8 py-2 text-base mt-10"
            onClick={() => setShowAll(true)}
          >
            Load more projects
          </button>
        ) : (
          <button
            className="btn btn-secondary bg-transparent text-[#e5e5e5] border border-[#444] hover:bg-[#18191c] font-semibold px-8 py-2 text-base mt-10"
            onClick={() => setShowAll(false)}
          >
            Show less
          </button>
        )
      )}
    </div>
  );
};

export default Showcase; 
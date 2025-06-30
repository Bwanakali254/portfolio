import React, { useEffect, useState, useRef } from "react";
import avatar from "../assets/avater.svg";
import { Home, User, Briefcase, Folder, Phone, Menu } from "lucide-react";

const navSections = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "value", icon: User, label: "About" },
  { id: "previous", icon: Briefcase, label: "Experience" },
  { id: "showcase", icon: Folder, label: "Projects" },
  { id: "contact", icon: Phone, label: "Contact" },
];

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navSections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 80) }; // 80px offset for navbar
      });
      offsets.sort((a, b) => a.top - b.top);
      setActiveSection(offsets[0].id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  // Consistent height and padding for both states
  const navHeight = "h-[76px]";
  const navPadding = "px-6";

  return (
    <>
      {/* Vertical lines for centered content indication (always above navbar, z-50) */}
      <div className="hidden lg:block fixed top-0 left-1/2 -translate-x-[400px] h-full w-px bg-[#23242a] z-[60] pointer-events-none" />
      <div className="hidden lg:block fixed top-0 left-1/2 translate-x-[400px] h-full w-px bg-[#23242a] z-[60] pointer-events-none" />
      {/* Sentinel for intersection observer to detect when navbar reaches top */}
      <div ref={sentinelRef} className="h-10" />
      {/* Top border line */}
      <div className={`w-full h-px bg-[#23242a] ${isFixed ? "fixed top-0 left-0 z-50" : "mt-2"}`} />
      <nav
        ref={navRef}
        className={`w-full flex justify-center items-center ${navHeight} px-4 transition-all duration-300 z-40 ${
          isFixed ? "fixed top-px left-0" : "relative"
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        <div
          className={`w-full max-w-[800px] flex items-center justify-between shadow-lg ${navPadding} ${navHeight} mx-auto relative`}
          style={{
            background:
              "linear-gradient(90deg, rgba(16,17,20,0.98) 0%, rgba(16,17,20,0.92) 100%)",
          }}
        >
          {/* Dotted pattern overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "18px 18px", zIndex: 1 }} />
          {/* Left: Profile (always visible and aligned) */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative">
              <img src={avatar} alt="profile" className="w-10 h-10 rounded-full border-2 border-[#23242a]" />
              {/* Green status dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold leading-tight">Hamisi Abdalla</span>
              <span className="text-xs text-green-400">Available for work</span>
            </div>
          </div>
          {/* Right: Icons */}
          <div className="flex items-center gap-6 text-gray-300 text-xl relative z-10">
            {/* Hamburger menu for small screens */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#23242a] focus:outline-none"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Open navigation menu"
              type="button"
            >
              {/* Hamburger Icon (SVG) */}
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Nav icons: hidden on small screens, visible on md+ */}
            <div className="hidden md:flex items-center gap-6">
              {navSections.map(({ id, icon: Icon, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={label}
                  className={
                    `transition w-8 h-8 flex items-center justify-center rounded-full ` +
                    (activeSection === id
                      ? "bg-gradient-to-r from-[#ff4d4f] to-[#ffb86c] text-white shadow-lg"
                      : "hover:text-white")
                  }
                  style={{ outline: "none" }}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* Bottom border line */}
      <div className={`w-full h-px bg-[#23242a] ${isFixed ? "fixed top-[76px] left-0 z-50" : ""}`} />
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden" onClick={() => setMenuOpen(false)}>
          <div className="bg-[#18191c] w-56 h-full shadow-xl flex flex-col pt-8 gap-6 px-6 relative" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              type="button"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="pt-12 flex flex-col gap-6">
              {navSections.map(({ id, icon: Icon, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-label={label}
                  className={
                    `transition w-full flex items-center gap-3 py-3 px-2 rounded-lg text-lg ` +
                    (activeSection === id
                      ? "bg-gradient-to-r from-[#ff4d4f] to-[#ffb86c] text-white shadow-lg"
                      : "hover:text-white")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="w-6 h-6" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

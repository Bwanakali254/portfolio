import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/LanguagesCarousel";
import Value from "./components/Value";
import PreviousLife from "./components/PreviousLife";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
    return (
    <>
      {/* Vertical lines for centered content indication (only on large screens) */}
      <div className="hidden lg:block fixed top-0 left-1/2 -translate-x-[400px] h-full w-px bg-[#23242a] z-40 pointer-events-none" />
      <div className="hidden lg:block fixed top-0 left-1/2 translate-x-[400px] h-full w-px bg-[#23242a] z-40 pointer-events-none" />
        <Navbar />
      {/* Hero Section */}
      <section id="hero" className="container-center section-space">
        <Hero />
      </section>
      <div className="divider" />
      {/* Trusted Brands Section */}
      <section id="brands" className="container-center section-space">
        <TrustedBrands />
      </section>
      <div className="divider" />
      {/* Value Section */}
      <section id="value" className="container-center section-space">
        <Value />
      </section>
      <div className="divider" />
      {/* Previous Life Section */}
      <section id="previous" className="container-center section-space">
        <PreviousLife />
      </section>
      <div className="divider" />
      {/* Showcase Section */}
      <section id="showcase" className="container-center section-space">
        <Showcase />
      </section>
      <div className="divider" />
      {/* WhatsApp Section */}
      <section id="whatsapp" className="container-center section-space">
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-6">Let's Chat on WhatsApp</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            Have a project in mind or want to discuss an opportunity? 
            Send me a message on WhatsApp and I'll get back to you as soon as possible.
          </p>
          <a 
            href="https://wa.me/254796530452" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary bg-gradient-to-r from-green-500 to-green-600 text-white border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-3 text-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.781-1.66-2.08-.173-.309-.018-.475.13-.627.136-.135.297-.354.446-.531.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.491.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.36-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.723 1.467h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.258-6.165-3.54-8.413"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
      <div className="divider" />
      {/* Testimonials Section */}
      <section id="testimonials" className="container-center section-space">
        <Testimonials />
      </section>
      <div className="divider" />
      {/* Contact Form Section */}
      <section id="contact" className="container-center section-space">
        <ContactForm />
      </section>
      {/* Footer (no extra spacing) */}
      <Footer />
    </>
    );
};

export default App;
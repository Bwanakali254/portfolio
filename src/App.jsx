import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/LanguagesCarousel";
import Value from "./components/Value";
import PreviousLife from "./components/PreviousLife";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
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
      {/* Newsletter Section */}
      <section id="newsletter" className="container-center section-space">
        <Newsletter />
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
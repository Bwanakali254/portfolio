import React from "react";
import { Phone } from "lucide-react";

const ContactForm = () => (
  <div className="w-full flex flex-col items-center">
    {/* Section Heading */}
    <h2 className="font-serif text-3xl font-bold text-[#e5e5e5] mb-2 text-center">How can I help you?</h2>
    {/* Description Paragraph */}
    <p className="text-gray-400 text-base mb-8 text-center max-w-xl">Let me know what you need or ask any question! I'm always happy to connect and help you move your project forward.</p>
    {/* Contact Form */}
    <form
      className="flex flex-col gap-5 w-full max-w-[400px]"
      onSubmit={e => {
        e.preventDefault();
        alert('Your message has been sent!');
      }}
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm text-gray-300 font-medium">Name</label>
        <input id="name" type="text" className="input bg-[#18191c] border-[#23242a]" placeholder="Your name" />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm text-gray-300 font-medium">Email address</label>
        <input id="email" type="email" className="input bg-[#18191c] border-[#23242a]" placeholder="Your email address" />
      </div>
      {/* Subject */}
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="text-sm text-gray-300 font-medium">Subject</label>
        <input id="subject" type="text" className="input bg-[#18191c] border-[#23242a]" placeholder="Subject" />
      </div>
      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm text-gray-300 font-medium">Message</label>
        <textarea id="message" className="input bg-[#18191c] border-[#23242a] min-h-[120px] resize-none" placeholder="Your message" />
      </div>
      {/* Buttons Row */}
      <div className="flex gap-4 justify-center mt-2">
        <button
          className="btn btn-primary bg-[#e5ecf7] text-[#18191c] border-none shadow-sm hover:brightness-105 transition font-semibold px-8 py-2 text-base"
          type="submit"
        >
          Send message
        </button>
        <a
          href="tel:+254796530452"
          className="btn btn-secondary bg-transparent text-[#e5e5e5] border border-[#444] hover:bg-[#18191c] font-semibold px-8 py-2 text-base flex items-center gap-2"
          type="button"
        >
          <Phone className="w-5 h-5 mr-1" /> Book a call
        </a>
      </div>
    </form>
  </div>
);

export default ContactForm; 
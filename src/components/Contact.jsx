import React from "react";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="bg-black animated-dotted-background">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 py-16 w-full max-w-screen-xl mx-auto gap-8">
        
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
          <h4 className="font-semibold text-xs sm:text-sm text-white mb-2">
            GET IN TOUCH
          </h4>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl gradient-title leading-tight">
            Let's Build Better Projects
          </h1>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl gradient-title leading-tight mb-6">
            with <span className="gradient-title1">ProjectPilot</span>
          </h1>
          <p className="text-gray-300 max-w-md text-base sm:text-lg mt-2">
            Have questions or need help getting started? Our team is here to help you streamline your workflow and unlock your team's full potential.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0">
          <Link to="/contact">
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded hover:bg-gray-600 hover:text-white transition-colors cursor-pointer">
              <FaComment />
              <span className="font-medium">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

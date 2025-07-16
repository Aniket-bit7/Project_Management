import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="animated-dotted-background text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-32 border-b border-gray-700 pb-4 mb-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:mb-0 mb-8">
            <div className="gradient-title1 text-2xl font-bold mb-4">
              ProjectPilot
            </div>
            <p className="text-sm text-white leading-relaxed mb-4">
              ProjectPilot – Empowering Efficient Team Collaboration
            </p>
            <p className="text-sm text-white leading-relaxed">
              ProjectPilot is your ultimate task and project management platform designed
              to streamline team productivity, track progress visually, and enable
              seamless workflow from planning to completion.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-semibold text-white">Address:</span>{" "}
              Newton School of Technology, Rishihood University, Sonipat, Haryana, India, 201001
            </p>
          </div>

          {/* Pages (Non-clickable) */}
          <div className="col-span-1 md:ml-6 md:mb-0 mb-8">
            <h4 className="text-lg font-semibold mb-4 gradient-title">Pages</h4>
            <div className="flex flex-wrap text-sm text-gray-400">
              <ul className="w-1/2 space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Progress
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Projects
                  </a>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Tasks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-300 flex items-center">
                    <span className="mr-2 gradient-title">›</span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 gradient-title">Stay Connected</h4>
            <div className="flex flex-wrap items-center text-white gap-4 mb-4">
              <a href="#" className="hover:text-[#008080] text-xl">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-[#1877F3] text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#0A66C2] text-xl">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#FF0000] text-xl">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-[#E4405F] text-xl">
                <FaInstagram />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-white text-sm mt-2">
              <a href="mailto:support@projectpilot.in" className="flex items-center gap-2 hover:text-blue-300">
                <FaEnvelope className="text-base" /> support@projectpilot.in
              </a>
              <a href="mailto:contact@projectpilot.in" className="flex items-center gap-2 hover:text-blue-300">
                <FaEnvelope className="text-base" /> contact@projectpilot.in
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-300">
          © 2025 ProjectPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

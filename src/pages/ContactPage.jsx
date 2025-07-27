import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="text-white min-h-screen overflow-x-hidden bg-black">
      <Navbar />

      {/* Contact Form Section */}
      <section className="w-full min-h-screen animated-dotted-background1 flex justify-center items-center px-4 sm:px-6 md:px-10">
        {!submitted ? (
          <div className="w-full max-w-4xl bg-gray-900 shadow-[0_2px_8px_rgba(255,255,255,0.15)] rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  placeholder="email@gmail.com"
                  className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full bg-black border border-gray-700 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white/90 font-medium text-black py-2 px-6 rounded-md hover:bg-black hover:text-white transition cursor-pointer w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto px-4 py-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-400 mb-4">
              Thank You!
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              We’ve received your message. We’ll get back to you within 24
              hours.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 sm:py-20 px-4 sm:px-6 text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10">
          Join thousands of people already using{" "}
          <span className="gradient-title1 font-semibold">ProjectPilot</span> to
          streamline their projects and boost productivity.
        </p>
        <Link to="/project">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
          >
            Start For Free →
          </motion.button>
        </Link>
      </section>

      <Footer />
    </section>
  );
};

export default ContactPage;

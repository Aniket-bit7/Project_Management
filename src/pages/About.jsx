import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import AboutProjectPilot from "../components/AboutProjectPilot";
import { aboutFeatures } from "../data/aboutFeatures";
import WhoIsItFor from "../components/WhoIsItFor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactSection from "../components/Contact";

const About = () => {
  return (
    <section className="text-white min-h-screen overflow-x-hidden">
      <div className="animated-dotted-background1">
        <Navbar />
        <AboutProjectPilot />
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-10 lg:mx-5 mt-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium">
          Core <span className="gradient-title">Features</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6">
          {aboutFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f2c] border border-white/20 rounded-2xl p-5 sm:p-6 shadow-lg group hover:shadow-xl hover:bg-white transition-all duration-500 ease-in-out"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white transition-colors duration-500 group-hover:text-black">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed transition-colors duration-500 group-hover:text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Is It For Section */}
      <WhoIsItFor />

      {/* How it works (Video) */}
      <div className="flex flex-col gap-6 items-center px-4 sm:px-6 md:px-10 mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          How It <span className="gradient-title">Works</span>?
        </h1>

        <div className="w-full max-w-6xl mx-auto mb-10">
          <div className="relative w-full aspect-video">
            <video
              controls
              muted
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg border border-white/80 shadow-[0_2px_8px_rgba(255,255,255,0.6)]"
            >
              <source
                src="/Screen Recording 2025-07-28 at 12.41.21 AM.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection background="animated-dotted-background1" />

      {/* Final CTA Section */}
      <section className="bg-black py-16 px-4 sm:px-6 md:px-10 text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
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
            className="bg-white text-black font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg flex items-center gap-2 mx-auto cursor-pointer text-sm sm:text-base"
          >
            Start For Free →
          </motion.button>
        </Link>
      </section>

      <Footer />
    </section>
  );
};

export default About;

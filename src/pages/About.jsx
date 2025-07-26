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
      <div className="flex flex-col gap-6 m-5">
        <h1 className="text-center text-4xl font-medium">
          Core <span className="gradient-title">Features</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
          {aboutFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f0f2c] border border-white/20 rounded-2xl p-6 shadow-lg group hover:shadow-xl hover:bg-white transition-all duration-500 ease-in-out"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white transition-colors duration-500 group-hover:text-black">
                {item.title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed transition-colors duration-500 group-hover:text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <WhoIsItFor />
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-4xl font-semibold text-center">
          How It <span className="gradient-title">Works</span>?
        </h1>
        {/* // when i add my video i will use video tag. */}
        <iframe
          width="1100"
          height="500"
          src="https://www.youtube.com/embed/PV6fuOEGNzY?start=189"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          className="mb-10"
        ></iframe>
      </div>
      <ContactSection background="animated-dotted-background1"/>
      <section className="bg-black py-20 px-6 text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
          Join thousands of people already using{" "}
          <span className="gradient-title1 font-semibold"> ProjectPilot</span>{" "}
          to streamline their projects and boost productivity.
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

export default About;

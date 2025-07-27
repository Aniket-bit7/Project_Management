import React from "react";
import Navbar from "../layout/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { featuresData, iconMap } from "../data/features";
import { CompanyCarousel } from "../components/Carousels";
import { serviceCarousel } from "../data/latestServices";
import { motion } from "framer-motion";
import FAQSection from "../components/FAQs";
import ClientTestimonial from "../components/ClientTestimonial";
import { clients } from "../data/clients";
import ContactSection from "../components/Contact";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <section className="min-h-screen overflow-x-hidden">
      <div className="animated-dotted-background1">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-10 lg:py-0">
          {/* Text Section */}
          <div className="w-full text-left px-4 sm:px-6 lg:px-0">
            <div className="gradient-title text-4xl sm:text-5xl lg:text-6xl lg:ml-12">
              Streamline Your Workflow <br /> with
              <span className="gradient-title1"> ProjectPilot</span>
              <p className="text-base sm:text-lg lg:text-xl mt-2 text-white">
                Empower yourself with our intuitive project management solution.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-10 lg:ml-12">
              <Link to="/project">
                <button className="bg-white rounded px-4 py-2 flex items-center gap-2 cursor-pointer">
                  Get Started <FaArrowRight style={{ fontSize: "12px" }} />
                </button>
              </Link>
              <Link to="/about">
                <button className="border border-white text-white px-4 py-2 rounded cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 px-4 sm:px-6 lg:px-0">
            <img
              src="src/assets/download (1).png"
              alt="Hero"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 sm:px-6 lg:px-14 py-10">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium text-white">
          Key Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-4 lg:px-6 mt-4 sm:mt-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-gray-900 shadow-md p-6 sm:p-8 rounded-xl bg-white/5 min-h-[320px] sm:min-h-[340px] transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-white group"
            >
              <div className="mb-4 transition-colors duration-300 group-hover:text-black">
                {iconMap[feature.icon]}
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <h1 className="text-white text-xl sm:text-2xl font-semibold transition-colors duration-300 group-hover:text-black">
                  {feature.title}
                </h1>
                <h3 className="text-md sm:text-lg text-gray-300 font-medium transition-colors duration-300 group-hover:text-gray-800">
                  {feature.tagline}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="animated-dotted-background flex flex-col gap-6 sm:gap-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-0">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl text-center mt-10 font-semibold">
          Trusted by Industry Leaders
        </h1>
        <CompanyCarousel />
      </section>

      <section className="flex flex-col mt-12 sm:mt-20 justify-center items-center px-4 py-4">
        <div className="flex flex-col mb-10 sm:mb-16 lg:mb-20 text-center px-4 sm:px-6 lg:px-0">
          <h3 className="font-bold tracking-widest gradient-title text-sm sm:text-base md:text-lg">
            OUR LATEST SERVICES
          </h3>
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
            Crafting Innovative Solutions for
          </h1>
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
            Your Digital Success
          </h1>
        </div>

        <div className="flex flex-col">
          {serviceCarousel.map((item, idx) =>
            idx % 2 === 0 ? (
              <div
                key={idx}
                className="flex flex-col sm:flex-row md:items-start md:justify-between gap-6 sm:gap-10 mb-16 md:px-4"
              >
                {/* Image on Left */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-auto h-auto sm:h-[400px] md:h-[320px] max-w-[90vw] sm:max-w-none object-contain"
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Vertical Line */}
                <div className="hidden sm:block w-[1px] h-[300px] bg-gray-300"></div>

                {/* Text */}
                <div className="px-4 sm:px-32 md:px-8 flex flex-col text-center sm:text-left md:text-left md:max-w-[50%]">
                  <h1 className="text-2xl sm:text-4xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="mt-4 sm:mt-8 text-gray-300 text-base sm:text-lg md:text-base">
                    {item.para}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="flex flex-col sm:flex-row-reverse md:items-start md:justify-between gap-6 sm:gap-10 mb-16 md:px-4"
              >
                {/* Image on Right */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-auto h-auto sm:h-[400px] md:h-[320px] max-w-[90vw] sm:max-w-none object-contain"
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Vertical Line */}
                <div className="hidden sm:block w-[1px] h-[300px] bg-gray-300"></div>

                {/* Text */}
                <div className="px-4 sm:px-32 md:px-8 flex flex-col text-center sm:text-left md:text-left md:max-w-[50%]">
                  <h1 className="text-2xl sm:text-4xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="mt-4 sm:mt-8 text-gray-300 text-base sm:text-lg md:text-base">
                    {item.para}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <FAQSection />
      <ClientTestimonial
        title1="Client Testimonials"
        title2="What Our Clients Say"
        data={clients}
      />

      <ContactSection background="animated-dotted-background1" />
      <section className="bg-black py-20 px-6 text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
          Join thousands of people already using{" "}
          <span className="gradient-title1 font-semibold">ProjectPilot</span>to
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

export default Home;

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "../data/faqs";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="animated-dotted-background py-12 px-4 sm:py-16 sm:px-8 md:py-20 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center leading-snug">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-3 sm:pb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full cursor-pointer flex justify-between items-center text-left text-white text-base sm:text-lg font-medium focus:outline-none"
              >
                <span className="max-w-[90%]">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>

              {activeIndex === index && (
                <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base leading-relaxed transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

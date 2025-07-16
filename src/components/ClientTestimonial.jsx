import React from "react";

const ClientTestimonial = ({ title1, title2, data }) => {
  return (
    <section>
      <div className="flex flex-col">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-4 md:px-8">
          <h4 className="gradient-title font-semibold text-xl sm:text-2xl md:text-2xl text-center">
            {title1}
          </h4>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center mt-2">
            {title2}
          </h1>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-start mb-12 sm:mb-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
          {data.map((items, idx) => (
            <div key={idx} className="w-full">
              {/* Testimonial Text Box */}
              <div className="bg-white/90 w-full h-auto p-6 md:p-8 border-t-4 border-gray-500 text-sm sm:text-base md:text-[15px]">
                {items.text}
                <div className="mt-2 cursor-pointer text-base md:text-lg">
                  {items.stars}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex gap-3 mt-5 items-center">
                <img
                  src={items.img}
                  alt={items.name}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                />
                <div className="flex flex-col gap-1 sm:gap-2 md:gap-1">
                  <h4 className="text-white/90 font-bold text-sm sm:text-base md:text-[16px]">
                    {items.name}
                  </h4>
                  <h6 className="text-white/90 text-xs sm:text-sm md:text-sm">
                    {items.post}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonial;

import React, { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { Link } from "react-router-dom";

const ResumeCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="animated-dotted-background2 min-h-[50vh] flex flex-col justify-center items-center px-4 py-6 sm:px-6 md:px-8 rounded">
      <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-3 sm:mb-4 text-center leading-snug">
        Pick up where you left off in{" "}
        <span className="gradient-title2 inline-flex items-center font-bold">
          ProjectPilot
        </span>
      </h2>

      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 text-black bg-white rounded-md border px-4 py-2 placeholder-gray-600 text-sm w-[90%] max-w-md"
        placeholder="Search Your Projects ..."
      />

      <ProjectGrid searchTerm={searchTerm} />

      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
        <Link to="/tasks">
          <button className="text-black font-medium bg-white px-4 py-2 rounded-md text-sm sm:text-base">
            + Add New Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResumeCard;

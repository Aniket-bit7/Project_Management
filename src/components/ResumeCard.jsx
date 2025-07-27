import React, { useState } from "react";
import ProjectGrid from "./ProjectGrid";
import { Link } from "react-router-dom";

const ResumeCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="animated-dotted-background2 min-h-[50vh] flex flex-col justify-center items-center px-4 py-6 rounded">
      <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4">
        Pick up where you left off in{" "}
        <span className="gradient-title2 inline-flex items-center font-bold">
          ProjectPilot
        </span>
      </h2>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 text-black bg-white rounded-md border px-4 py-2 placeholder-gray-600 text-sm w-full max-w-md"
        placeholder="Search Your Projects ..."
      />
      <ProjectGrid searchTerm={searchTerm} />
      <div className="flex items-center gap-6">
        <Link to="/tasks">
          <button className="text-black font-medium bg-white p-2 rounded-md mt-6 cursor-pointer">
            + Add New Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResumeCard;

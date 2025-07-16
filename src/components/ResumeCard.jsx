import React from "react";
import ProjectGrid from "./ProjectGrid";
import { Link } from "react-router-dom";

const ResumeCard = () => {
  return (
    <div className="bg-white min-h-[50vh] flex flex-col justify-center items-center px-4 py-6 rounded">
      <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-6">
        Pick up where you left off in{" "}
        <span className="gradient-title2 inline-flex items-center font-bold">
          ProjectPilot
        </span>
      </h2>
      <ProjectGrid />
      <Link to="/tasks">
        <button className="text-white bg-black p-2 rounded-md mt-6 cursor-pointer">
          + Add New Project
        </button>
      </Link>
    </div>
  );
};

export default ResumeCard;

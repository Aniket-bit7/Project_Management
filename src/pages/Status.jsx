import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const StatusPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  return (
    <div className="min-h-screen p-6 bg-white">
      {project ? (
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Status Page for: <span className="text-blue-600">{project.title}</span>
        </h1>
      ) : (
        <h1 className="text-2xl text-red-600 text-center font-semibold">
          Project Not Found
        </h1>
      )}
    </div>
  );
};

export default StatusPage;

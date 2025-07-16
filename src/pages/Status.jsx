import React from "react";
import { useParams } from "react-router-dom";

const StatusPage = () => {
  const { title } = useParams();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Status Page for: <span className="text-blue-600">{decodeURIComponent(title)}</span>
      </h1>


    </div>
  );
};

export default StatusPage;

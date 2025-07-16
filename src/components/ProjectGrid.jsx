import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "My Scrum Project",
    subtitle: "Team-managed software",
    openItems: 0,
    iconBg: "bg-purple-200",
    iconText: "📣",
  },
  {
    title: "Marketing Board",
    subtitle: "Team-managed Kanban",
    openItems: 3,
    iconBg: "bg-yellow-100",
    iconText: "📋",
  },
  {
    title: "Dev Sprint",
    subtitle: "Scrum-based project",
    openItems: 5,
    iconBg: "bg-blue-200",
    iconText: "⚙️",
  },
];

const ProjectGrid = () => {
  const navigate = useNavigate();

  const handleCardClick = (projectTitle) => {
    const slug = encodeURIComponent(projectTitle); // clean for URL
    navigate(`/status/${slug}`);
  };

  return (
    <div className="p-6 bg-black rounded-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Your Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(project.title)}
          >
            <div className="flex">
              <div
                className={`${project.iconBg} w-2 rounded-tl-lg rounded-bl-lg`}
              ></div>

              <div className="flex-1 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-xl">
                    {project.iconText}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-500">
                    Quick links
                  </h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-800 text-sm">My open work items</p>
                    <span className="bg-black text-sm font-semibold px-2 py-0.5 rounded-full">
                      {project.openItems}
                    </span>
                  </div>
                  <p className="text-sm mt-1 text-gray-800">Done work items</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react"; 

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(storedProjects);
  }, []);

  const handleCardClick = (projectId) => {
    navigate(`/status/${projectId}`);
  };

  const handleDelete = (projectId, e) => {
    e.stopPropagation(); 
    const updatedProjects = projects.filter((p) => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div className="px-6 py-10 bg-black rounded-md w-full">
      <h2 className="text-3xl font-bold gradient-title mb-10 text-center">
        Your Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-300 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-[#080132] group"
            onClick={() => handleCardClick(project.id)}
          >
            <div className="flex min-h-[200px]">
              <div className={`${project.iconBg} w-2 rounded-tl-lg rounded-bl-lg`}></div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl text-gray-800 group-hover:text-white">
                    {project.title}
                  </h3>
                  <button
                    onClick={(e) => handleDelete(project.id, e)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Project"
                  >
                    <Trash2 className="w-5 h-5 cursor-pointer group-hover:text-white" />
                  </button>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-1 group-hover:text-white/80">
                    Quick Updates
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 text-sm group-hover:text-white">
                        To Do
                      </p>
                      <span className="bg-black text-sm font-semibold px-2 py-0.5 rounded-full text-white group-hover:bg-white group-hover:text-blue-900">
                        {project.todo}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 text-sm group-hover:text-white">
                        In Progress
                      </p>
                      <span className="bg-black text-sm font-semibold px-2 py-0.5 rounded-full text-white group-hover:bg-white group-hover:text-blue-900">
                        {project.inprogress}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 text-sm group-hover:text-white">
                        In Review
                      </p>
                      <span className="bg-black text-sm font-semibold px-2 py-0.5 rounded-full text-white group-hover:bg-white group-hover:text-blue-900">
                        {project.review}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 text-sm group-hover:text-white">
                        Done
                      </p>
                      <span className="bg-black text-sm font-semibold px-2 py-0.5 rounded-full text-white group-hover:bg-white group-hover:text-blue-900">
                        {project.done}
                      </span>
                    </div>
                  </div>
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

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { XCircle } from "lucide-react"; 
import ContactSection from "../components/Contact";

const StatusPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [taskInput, setTaskInput] = useState({
    todo: "",
    inprogress: "",
    review: "",
    done: "",
  });

  // Load project from localStorage
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const foundProject = storedProjects.find((p) => p.id.toString() === id);
    setProject(foundProject);
  }, [id]);

  // Helper to save updated project back to localStorage
  const saveProject = (updatedProject) => {
    const allProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const newList = allProjects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p
    );
    localStorage.setItem("projects", JSON.stringify(newList));
    setProject(updatedProject);
  };

  // Handle adding a new task to a column
  const handleAddTask = (section) => {
    if (!taskInput[section].trim()) return;
    const updatedProject = { ...project };

    if (!updatedProject[section + "Tasks"]) {
      updatedProject[section + "Tasks"] = [];
    }

    updatedProject[section + "Tasks"].push({
      id: Date.now(),
      title: taskInput[section],
    });

    updatedProject[section] = updatedProject[section] + 1;
    setTaskInput({ ...taskInput, [section]: "" });
    saveProject(updatedProject);
  };

  // Handle deleting a task
  const handleDeleteTask = (section, taskId) => {
    const updatedProject = { ...project };
    updatedProject[section + "Tasks"] = updatedProject[section + "Tasks"].filter(
      (task) => task.id !== taskId
    );

    updatedProject[section] = Math.max(0, updatedProject[section] - 1);
    saveProject(updatedProject);
  };

  const renderSection = (title, key, color) => (
    <div className="bg-white/90 rounded-lg shadow-md p-4 w-full">
      <h3 className={`text-xl font-semibold mb-8 text-${color}-700`}>{title}</h3>

      <div className="space-y-2 mb-4">
        {(project?.[key + "Tasks"] || []).map((task) => (
          <div
            key={task.id}
            className="bg-gray-100 border border-gray-300 text-gray-800 px-3 py-2 rounded-md flex justify-between items-center"
          >
            <span className="flex-1">{task.title}</span>
            <button
              onClick={() => handleDeleteTask(key, task.id)}
              className="text-red-500 hover:text-red-700 ml-3 cursor-pointer"
              title="Delete Task"
            >
              <XCircle size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder={`Add task to ${title}`}
          value={taskInput[key]}
          onChange={(e) =>
            setTaskInput({ ...taskInput, [key]: e.target.value })
          }
          className="flex-1 border border-gray-300 px-3 py-1 rounded-md"
        />
        <button
          onClick={() => handleAddTask(key)}
          className={`bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-1 rounded-md`}
        >
          Add
        </button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen overflow-x-hidden text-black animated-dotted-background1">
      <Navbar />
      <div className="p-6">
        {project ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-2 gradient-title">{project.title}</h1>
              <p className="text-white/90 text-lg">{project.description}</p>
              <p className="text-base text-gray-200 mt-1">
                Deadline: {project.deadline}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {renderSection("To Do", "todo", "blue")}
              {renderSection("In Progress", "inprogress", "yellow")}
              {renderSection("In Review", "review", "purple")}
              {renderSection("Done", "done", "green")}
            </div>
          </>
        ) : (
          <h1 className="text-2xl text-red-600 text-center font-semibold">
            Project Not Found
          </h1>
        )}
      </div>
      <ContactSection background="bg-black"/>
      <Footer />
    </section>
  );
};

export default StatusPage;


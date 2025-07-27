import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { ListCheck, XCircle } from "lucide-react";
import ContactSection from "../components/Contact";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatusPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [taskInput, setTaskInput] = useState({
    todo: "",
    inprogress: "",
    review: "",
    done: "",
  });

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const foundProject = storedProjects.find((p) => p.id.toString() === id);
    if (foundProject) {
      const allTasks = [
        ...(foundProject.todoTasks || []),
        ...(foundProject.inprogressTasks || []),
        ...(foundProject.reviewTasks || []),
        ...(foundProject.doneTasks || []),
      ];

      foundProject.totalTasks = allTasks.length;
      foundProject.completedTasks = (foundProject.doneTasks || []).length;
    }

    setProject(foundProject);
  }, [id]);

  const saveProject = (updatedProject) => {
    const allProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const newList = allProjects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p
    );
    localStorage.setItem("projects", JSON.stringify(newList));
    setProject(updatedProject);
  };

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

    const allTasks = [
      ...(updatedProject.todoTasks || []),
      ...(updatedProject.inprogressTasks || []),
      ...(updatedProject.reviewTasks || []),
      ...(updatedProject.doneTasks || []),
    ];
    updatedProject.totalTasks = allTasks.length;
    updatedProject.completedTasks = (updatedProject.doneTasks || []).length;

    setTaskInput({ ...taskInput, [section]: "" });
    saveProject(updatedProject);
  };

  const handleDeleteTask = (section, taskId) => {
    const updatedProject = { ...project };
    updatedProject[section + "Tasks"] = updatedProject[
      section + "Tasks"
    ].filter((task) => task.id !== taskId);

    updatedProject[section] = Math.max(0, updatedProject[section] - 1);

    const allTasks = [
      ...(updatedProject.todoTasks || []),
      ...(updatedProject.inprogressTasks || []),
      ...(updatedProject.reviewTasks || []),
      ...(updatedProject.doneTasks || []),
    ];
    updatedProject.totalTasks = allTasks.length;
    updatedProject.completedTasks = (updatedProject.doneTasks || []).length;

    saveProject(updatedProject);
  };

  const renderSection = (title, key, color) => (
    <div className="bg-white/90 rounded-lg shadow-md p-4 w-full">
      <h3 className={`text-xl font-semibold mb-8 text-${color}-700`}>
        {title}
      </h3>

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
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen overflow-x-hidden text-black animated-dotted-background1">
      <Navbar />
      <div className="px-4 sm:px-6 py-6">
        {project ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-2 gradient-title">
                {project.title}
              </h1>
              <p className="text-white/90 text-base sm:text-lg">
                {project.description}
              </p>
              <p className="text-sm sm:text-base text-gray-200 mt-1">
                Deadline: {project.deadline}
              </p>
            </div>

            {/* Task Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
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

      {/* Progress & Chart */}
      {project && project.totalTasks > 0 && (
        <div className="w-full px-4 sm:px-6 animated-dotted-background3 max-w-3xl mx-auto mt-6 p-4 rounded shadow-md">
          <div className="flex items-center gap-2 mb-2 text-left text-base sm:text-xl font-medium text-gray-700">
            Progress:{" "}
            <span className="text-[#080132]">
              {Math.round((project.completedTasks / project.totalTasks) * 100)}%
            </span>
          </div>

          <div className="w-full border border-black rounded-full h-4 overflow-hidden mb-4">
            <div
              className="bg-[#3b04a3ff] h-4 transition-all duration-500"
              style={{
                width: `${
                  (project.completedTasks / project.totalTasks) * 100
                }%`,
              }}
            ></div>
          </div>

          <div className="flex justify-center text-sm font-medium text-gray-800 mb-6">
            <span className="font-medium text-base flex items-center gap-1">
              <ListCheck size={18} />
              Total: {project.totalTasks}
            </span>
          </div>

          <div className="w-full max-w-md mx-auto h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Completed", value: project.completedTasks },
                    {
                      name: "Left",
                      value: project.totalTasks - project.completedTasks,
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  <Cell fill="#3b04a3ff" />
                  <Cell fill="#686a6dff" />
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      <ContactSection background="bg-black" />
      <Footer />
    </section>
  );
};

export default StatusPage;

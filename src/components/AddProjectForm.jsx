import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [iconBg, setIconBg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline || !description || !iconBg) return;

    const newProject = {
      id: Date.now(),
      title,
      deadline,
      description,
      todo: 0,
      inprogress: 0,
      review: 0,
      done: 0,
      iconBg,
    };

    const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...existingProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    setTitle("");
    setDeadline("");
    setDescription("");
    setIconBg("");

    navigate("/project");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[50%] mt-10 mb-10 bg-black border border-gray-800 rounded-lg p-6 shadow-lg px-4"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">
        Add New Project
      </h2>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">
          Project Name
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2"
          placeholder="Enter project title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">Deadline</label>
        <input
          type="date"
          value={deadline}
          min={new Date().toLocaleDateString("en-CA")}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 h-24 resize-none"
          placeholder="Describe the project..."
        />
      </div>

      <div className="mb-6">
        <label className="block text-white font-medium mb-2">
          Strip Colour
        </label>
        <select
          value={iconBg}
          onChange={(e) => setIconBg(e.target.value)}
          className="w-full bg-gray-900 text-white border border-gray-700 rounded p-2"
        >
          <option value="">Choose a Colour</option>
          <option value="bg-green-200">bg-green-200</option>
          <option value="bg-blue-200">bg-blue-200</option>
          <option value="bg-red-200">bg-red-200</option>
          <option value="bg-sky-200">bg-sky-200</option>
          <option value="bg-yellow-200">bg-yellow-200</option>
          <option value="bg-purple-200">bg-purple-200</option>
          <option value="bg-orange-200">bg-orange-200</option>
          <option value="bg-violet-200">bg-violet-200</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium cursor-pointer"
      >
        Create Project
      </button>
    </form>
  );
};

export default AddProjectForm;

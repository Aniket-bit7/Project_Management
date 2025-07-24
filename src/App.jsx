import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectsPage from "./pages/ProjectsPage";
import ProgressPage from "./pages/ProgressPage";
import ContactPage from "./pages/ContactPage";
import Status from "./pages/Status";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/status/:id" element={<Status />} />
      </Routes>
    </div>
  );
}

export default App;

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useFirebase } from "../context/Firebase";
import ResumeCard from "../components/ResumeCard";

const ProjectsPage = () => {
  const firebase = useFirebase();
  const userName = firebase?.user?.displayName || firebase?.user?.email;

  return (
    <section className="text-white min-h-screen overflow-x-hidden">
      <div className="flex flex-col gap-10 pb-35 animated-dotted-background1">
        <Navbar />
        <p className="gradient-title text-center text-7xl flex flex-col gap-2 mt-10">
          Projects
        </p>
      </div>

      <div className="p-8 flex flex-col gap-8">
        <h1 className="font-medium text-4xl text-center">
          Welcome back, <span className="gradient-title">{userName}</span>
        </h1>
        <ResumeCard/>
      </div>
      <Footer />
    </section>
  );
};

export default ProjectsPage;

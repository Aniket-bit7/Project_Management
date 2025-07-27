import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useFirebase } from "../context/Firebase";
import ResumeCard from "../components/ResumeCard";

const ProjectsPage = () => {
  const firebase = useFirebase();
  const userName = firebase?.user?.displayName || firebase?.user?.email;

  return (
    <section className="text-white min-h-screen overflow-x-hidden">
      <div className="flex flex-col gap-8 sm:gap-10 pb-24 sm:pb-32 lg:pb-35 animated-dotted-background1 px-4 sm:px-6 lg:px-0">
        <Navbar />
        <p className="gradient-title text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col gap-2 mt-6 sm:mt-10">
          Projects
        </p>
      </div>

      <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-7 md:gap-8">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
          Welcome back, <span className="gradient-title">{userName}</span>
        </h1>
        <ResumeCard />
      </div>

      <Footer />
    </section>
  );
};

export default ProjectsPage;

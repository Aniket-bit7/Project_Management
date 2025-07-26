import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ContactSection from "../components/Contact";
import AddProjectForm from "../components/AddProjectForm";

const Tasks = () => {
  return (
    <section className="animated-dotted-background1 min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4">
        <AddProjectForm />
      </div>
      <ContactSection background="bg-black" />
      <Footer />
    </section>
  );
};

export default Tasks;

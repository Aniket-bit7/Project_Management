import { Typewriter } from "react-simple-typewriter";

const AboutProjectPilot = () => {
  const typewriterText = `ProjectPilot is a personalized project management tool designed to help
individuals track, organize, and manage their projects with ease. Whether
you're a solo developer, freelancer, or student, ProjectPilot gives you a
clear overview of your work from start to finish.
It streamlines your workflow by breaking projects into tasks and statuses,
so you can focus on getting things done instead of managing chaos.
Stay organized, hit deadlines, and bring your ideas to life — all in one place.`;

  return (
    <div className="flex flex-col mt-5 gap-4">
      <h1 className="text-center text-4xl font-medium">
        What is <span className="gradient-title">ProjectPilot</span>?
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12 py-8 gap-10">
        {/* Typewriter effect */}
        <pre className="text-xl text-white pb-15">
          <Typewriter
            words={[typewriterText]}
            loop={1}
            typeSpeed={30}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </pre>

        <img
          src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
          className="rounded-xl w-full max-w-md h-70 object-cover mr-15"
          alt="Project management"
        />
      </div>
    </div>
  );
};

export default AboutProjectPilot;

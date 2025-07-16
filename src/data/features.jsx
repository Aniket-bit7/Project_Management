import { ClipboardCheck, BarChart, LayoutDashboard, Filter } from "lucide-react";

export const featuresData  = [
  {
    title: "Smart Task Management",
    tagline: "Organize your team's work effortlessly",
    description: "Create, assign, prioritize, and track tasks in one centralized workspace. Ensure nothing slips through the cracks.",
    icon: "ClipboardCheck"
  },
  {
    title: "Progress Visualization",
    tagline: "See how far you’ve come",
    description: "Use visual tools like progress bars and percentage meters to track task and project completion at a glance.",
    icon: "BarChart"
  },
  {
    title: "Custom Project Dashboard",
    tagline: "Your workspace, your way",
    description: " A customizable dashboard gives you instant insights into task status, deadlines, and team activity.",
    icon: "LayoutDashboard"
  },
  {
    title: "Project & Task Filtering",
    tagline: "Find what matters, fast",
    description: "Use filters to quickly view projects or tasks by status, team member, priority, or due date.",
    icon: "Filter"
  }
]

export const iconMap = {
  ClipboardCheck: <ClipboardCheck className="text-gray-400 w-10 h-10" />,
  LayoutDashboard: <LayoutDashboard className="text-gray-400 w-10 h-10" />,
  BarChart: <BarChart className="text-gray-400 w-10 h-10" />,
  Filter: <Filter className="text-gray-400 w-10 h-10" />
};
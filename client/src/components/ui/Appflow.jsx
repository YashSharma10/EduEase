import { motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiBookOpen,
  FiHelpCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee"; // Update the import path

const steps = [
  {
    icon: FiHome,
    title: "Home Page",
    description: "Start your journey here.",
  },
  {
    icon: FiUser,
    title: "Profile Page",
    description: "Check your preferences.",
  },
  {
    icon: FiSettings,
    title: "Add Preferences",
    description: "Set your preferences if not set.",
  },
  {
    icon: FiCheckCircle,
    title: "Dashboard",
    description: "Access your dashboard.",
  },
  {
    icon: FiBookOpen,
    title: "Generate Lessons",
    description: "Create tailored lessons.",
  },
  {
    icon: FiHelpCircle,
    title: "Generate Quizzes",
    description: "Take personalized quizzes.",
  },
  {
    icon: FaRobot,
    title: "Edu Bot",
    description: "Get AI-powered assistance.",
  },
];

const firstRow = steps.slice(0, Math.ceil(steps.length / 2));
const secondRow = steps.slice(Math.ceil(steps.length / 2));

const RoadmapCard = ({ icon: Icon, title, description }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col items-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "bg-white/10 text-white"
      )}
    >
      <Icon size={40} className="text-blue-300 mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-blue-200 text-center">{description}</p>
    </figure>
  );
};

export default function Roadmap() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen bg-black text-white p-6">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0 bg-[length:400%_400%] bg-gradient-to-r from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c]"
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* Blue Overlay Glows */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full filter blur-3xl"
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 mb-10"
      >
        Your Learning Roadmap
      </motion.h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] mb-4">
          {firstRow.map((step, index) => (
            <RoadmapCard key={index} {...step} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((step, index) => (
            <RoadmapCard key={index} {...step} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}

// import { motion } from "framer-motion";
// import {
//   FiHome,
//   FiStar,
//   FiDollarSign,
//   FiMail,
//   FiBookOpen,
//   FiUser,
// } from "react-icons/fi";
// import { FaRobot } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
//       {/* Animated Gradient Background */}
//       <motion.div
//         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         className="absolute inset-0 z-0 bg-[length:400%_400%] bg-gradient-to-r from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c]"
//         style={{ backgroundSize: "400% 400%" }}
//       />

//       {/* Blue Overlay Glows */}
//       <motion.div
//         animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
//         className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full filter blur-3xl"
//       />
//       <motion.div
//         animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
//         transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
//         className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full filter blur-3xl"
//       />

//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/5 border-b border-white/10">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-blue-300 text-sm">
//           <div className="text-lg font-bold text-white">NeuraTutor</div>
//           <ul className="flex gap-6">
//             <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
//               <FiBookOpen size={18} />
//               <Link to="/quiz" className="text-blue-300 hover:underline">
//                 Quizzes
//               </Link>
//             </li>

//             <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
//               <FiUser size={18} />
//               <Link to="/dashboard" className="text-blue-300 hover:underline">
//                 Profile
//               </Link>
//             </li>
//             <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
//               <FiMail size={18} />
//               Help
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-4xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
//         >
//           Learn Smarter with Personalized Education
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="mt-6 text-lg text-blue-200 max-w-2xl"
//         >
//           Discover your unique learning style and get tailored lessons, quizzes, and AI assistance to accelerate your learning journey.
//         </motion.p>

//         <div className="mt-10 flex gap-4 flex-wrap justify-center">
//           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-black">
//             Start Learning
//           </button>
//           <Link to="/bot" className="flex items-center gap-1">

//             <button className="px-6 flex justify-center items-center gap-3 py-3 rounded-full border border-blue-200 text-blue-200 hover:bg-white/10 font-semibold">
//             <FaRobot    size={20} />
//               Edu Bot
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
//         >
//           What Makes NeuraTutor Unique?
//         </motion.h2>

//         <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
//             <FiBookOpen size={40} className="text-blue-300" />
//             <h3 className="mt-4 text-xl font-semibold">Adaptive Quizzes</h3>
//             <p className="mt-2 text-blue-200">
//               Quizzes evolve with your progress and knowledge level.
//             </p>
//           </div>
//           <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
//             <FiStar size={40} className="text-blue-300" />
//             <h3 className="mt-4 text-xl font-semibold">
//               AI-Powered Assistance
//             </h3>
//             <p className="mt-2 text-blue-200">
//               Ask doubts and get instant explanations tailored just for you.
//             </p>
//           </div>
//           <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
//             <FiDollarSign size={40} className="text-blue-300" />
//             <h3 className="mt-4 text-xl font-semibold">Flexible Plans</h3>
//             <p className="mt-2 text-blue-200">
//               Choose from free or premium plans that suit your learning needs.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// LandingPage.js
// import { motion } from "framer-motion";
// import { FaRobot } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoCloudOfflineOutline } from "react-icons/io5";
import {
  FiHome,
  FiStar,
  FiDollarSign,
  FiMail,
  FiBookOpen,
  FiUser,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Header from "../components/ui/common/header"; // Import the Header component
import Roadmap from "../components/ui/Appflow"; // Import the Roadmap component

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* <div className="relative overflow-hidden h-[500px] w-full max-w-[350px]">
        <Meteors />
      </div> */}
   
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

      {/* Header Component */}
      <Header />
      {/* <GoogleAuthPage/> */}
      <div className="relative top-38 left-72">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hover:scale-110 transition-transform duration-300"
        >
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a855f7" />
              <stop offset="0.5" stopColor="#ec4899" />
              <stop offset="1" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <path
            d="M24 0L25.3597 8.25467C26.5758 15.6377 32.3624 21.4242 39.7453 22.6403L48 24L39.7453 25.3597C32.3624 26.5758 26.5758 32.3624 25.3597 39.7453L24 48L22.6403 39.7453C21.4242 32.3624 15.6376 26.5758 8.25467 25.3597L0 24L8.25467 22.6403C15.6377 21.4242 21.4242 15.6376 22.6403 8.25467L24 0Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
        >
          Learn Smarter with Personalized Education
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg text-blue-200 max-w-2xl"
        >
          Discover your unique learning style and get tailored lessons, quizzes,
          and AI assistance to accelerate your learning journey.
        </motion.p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Link to={"/course"}>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-black" onCl>
            Start Learning
          </button>
          </Link>
          <Link to="/bot" className="flex items-center gap-1">
            <button className="px-6 flex justify-center items-center gap-3 py-3 rounded-full border border-blue-200 text-blue-200 hover:bg-white/10 font-semibold">
              <FaRobot size={20} />
              Edu Bot
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
        >
          What Makes EduEase Unique?
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <FiBookOpen size={40} className="text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">Adaptive Quizzes</h3>
            <p className="mt-2 text-blue-200">
              Quizzes evolve with your progress and knowledge level.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <FiStar size={40} className="text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">
              AI-Powered Assistance
            </h3>
            <p className="mt-2 text-blue-200">
              Ask doubts and get instant explanations tailored just for you.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <IoCloudOfflineOutline size={40} className="text-blue-300"/>
            <h3 className="mt-4 text-xl font-semibold">No Internet? No Problem</h3>
            <p className="mt-2 text-blue-200">
              EduTutor AI runs offline, keeing your learning smooth and secure.
            </p>
          </div>
        </div>
        
      </section>
      <Roadmap/>
    </div>
  );
}

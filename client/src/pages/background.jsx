import { motion } from "framer-motion";
import { FiHome, FiStar, FiDollarSign, FiMail, FiBookOpen } from "react-icons/fi";

export default function FuturisticAILanding() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
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

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-blue-300 text-sm">
          <div className="text-lg font-bold text-white">NeuraTutor</div>
          <ul className="flex gap-6">
            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition"><FiHome size={18} />Home</li>
            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition"><FiBookOpen size={18} />Quizzes</li>
            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition"><FiStar size={18} />AI Features</li>
            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition"><FiDollarSign size={18} />Plans</li>
            <li className="flex items-center gap-1 hover:text-white cursor-pointer transition"><FiMail size={18} />Help</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100"
        >
          Personalized AI Quizzes <br className="hidden sm:block" /> for Smart Learning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg text-blue-200 max-w-2xl"
        >
          NeuraTutor creates adaptive quizzes based on your pace and helps clear doubts in real-time with an AI mentor.
        </motion.p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-black">
            Start Learning
          </button>
          <button className="px-6 py-3 rounded-full border border-blue-200 text-blue-200 hover:bg-white/10 font-semibold">
            Explore Features
          </button>
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
          What Makes NeuraTutor Unique?
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <FiBookOpen size={40} className="text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">Adaptive Quizzes</h3>
            <p className="mt-2 text-blue-200">Quizzes evolve with your progress and knowledge level.</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <FiStar size={40} className="text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">AI-Powered Assistance</h3>
            <p className="mt-2 text-blue-200">Ask doubts and get instant explanations tailored just for you.</p>
          </div>
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-lg shadow-lg">
            <FiDollarSign size={40} className="text-blue-300" />
            <h3 className="mt-4 text-xl font-semibold">Flexible Plans</h3>
            <p className="mt-2 text-blue-200">Choose from free or premium plans that suit your learning needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

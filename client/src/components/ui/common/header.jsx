import { FiBookOpen, FiUser, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-blue-300 text-sm">
        {/* Updated this line */}
        <Link to="/" className="text-lg font-bold text-white hover:underline ">
        <img src={logo} style={{ height: '40px' }} />
        </Link>

        <ul className="flex gap-6">
          <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <FiBookOpen size={18} />
            <Link to="/quiz" className="text-blue-300 hover:underline">
              Quizzes
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <FiUser size={18} />
            <Link to="/dashboard" className="text-blue-300 hover:underline">
              Profile
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <FiMail size={18} />
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a1a] text-gray-300 py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          © 2025 DevSquad
        </div>

        {/* Links or Socials */}
        <div className="flex gap-4 text-sm">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

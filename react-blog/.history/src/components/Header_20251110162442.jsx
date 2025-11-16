import React from "react";

const Header = () => {
  return (
    <header className="w-full max-w-[1920px] h-[112px] border-b border-gray-200 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center border border-blue-500 
              bg-bl rounded-full">
              <span className="text-blue-600 font-bold text-lg">imb</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#">Smart Dr</a>
            <a href="#">Products & Services</a>
            <a href="#">About Us</a>
            <a href="#">Gallery</a>
            <a href="#">Legal</a>
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-xs text-blue-600 hover:underline">
            PERSONAL LOGIN
          </button>
          <button className="bg-lime-300 px-4 py-1 rounded-full text-xs font-bold border border-blue-500 hover:bg-yellow-400">
            SELF SIGN-UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

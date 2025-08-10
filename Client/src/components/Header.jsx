import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-20 py-2 bg-blue-500">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="School Logo" className="h-32 w-32" />
        <div className="">
          <h1 className="text-5xl font-bold text-white mb-4">
            ঘোড়াশাল পাইলট উচ্চ বিদ্যালয়
          </h1>
          <h1 className="text-5xl font-bold text-white">
            Ghorashal Pilot High School
          </h1>
        </div>
      </div>

      {/* Established */}
      <div className="text-xl font-semibold text-white">
        <p>স্থাপিত: 1994</p>
        <p>ঘোড়াশাল, পলাশ,</p>
        <p>নরসিংদী।</p>
      </div>
    </header>
  );
};

export default Header;

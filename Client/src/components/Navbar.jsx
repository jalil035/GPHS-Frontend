import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-12 py-3 flex items-center justify-between">
        {/* Menu */}
        <ul className="flex gap-10 mx-auto font-medium text-white">
          {/* প্রচ্ছদ */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-600"
                  : "hover:text-blue-400 duration-200"
              }
            >
              প্রচ্ছদ
            </NavLink>
          </li>

          {/* শিক্ষার্থী তথ্য */}
          <li className="relative group">
            <span className="hover:text-blue-600 duration-50 cursor-pointer">
              শিক্ষার্থী তথ্য
            </span>
            <ul className="absolute left-0 mt-2 w-56 bg-blue-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink
                  to="/students/class-1-5"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ১ম থেকে ৫ম শ্রেণী শিক্ষার্থী
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students/class-6"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ৬ষ্ঠ শ্রেণির শিক্ষার্থী সংখ্যা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students/class-7"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ৭ম শ্রেণির শিক্ষার্থী সংখ্যা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students/class-8"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ৮ম শ্রেণির শিক্ষার্থী সংখ্যা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/students/class-9-10"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ৯ম-১০ম শ্রেণির শিক্ষার্থী সংখ্যা
                </NavLink>
              </li>
            </ul>
          </li>

          {/* শিক্ষক প্যানেল */}
          <li className="relative group">
            <span className="hover:text-blue-600 duration-200 cursor-pointer">
              শিক্ষক প্যানেল
            </span>
            <ul className="absolute left-0 mt-2 w-56 bg-blue-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink
                  to="/teachers/list"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  শিক্ষক তালিকা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teachers/by-class"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  শ্রেণি ভিত্তিক শিক্ষক তালিকা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teachers/by-department"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  বিভাগ ভিত্তিক শিক্ষক
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teachers/class-guide"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  শ্রেণি ভিত্তিক গাইড শিক্ষক
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/teachers/panel"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  শিক্ষক প্যানেল
                </NavLink>
              </li>
            </ul>
          </li>

          {/* একাডেমিক তথ্য */}
          <li className="relative group">
            <span className="hover:text-blue-600 duration-200 cursor-pointer">
              একাডেমিক তথ্য
            </span>
            <ul className="absolute left-0 mt-2 w-64 bg-blue-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink
                  to="/academic/class-count"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ক্লাস সংখ্যা
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academic/calendar"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  একাডেমিক ক্যালেন্ডার
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academic/info"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  একাডেমিক তথ্য
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academic/multimedia-class"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  মাল্টিমিডিয়া ক্লাস
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/academic/sheikh-rasel-lab"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  শেখ রাসেল ডিজিটাল ল্যাব
                </NavLink>
              </li>
            </ul>
          </li>

          {/* ডাউনলোড */}
          <li className="relative group">
            <span className="hover:text-blue-600 duration-200 cursor-pointer">
              ডাউনলোড
            </span>
            <ul className="absolute left-0 mt-2 w-56 bg-blue-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink
                  to="/downloads/admission-form"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ভর্তি ফরম
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/downloads/class-routine"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ক্লাস রুটিন
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/downloads/syllabus"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  সিলেবাস
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/downloads/leave-form"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ছুটির আবেদন ফরম
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/downloads/exam-routine"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  পরীক্ষার রুটিন
                </NavLink>
              </li>
            </ul>
          </li>

          {/* স্কুল প্রোগ্রাম */}
          <li>
            <NavLink
              to="/school-program"
              className="hover:text-blue-600 duration-200"
            >
              স্কুল প্রোগ্রাম
            </NavLink>
          </li>

          {/* নোটিশ বোর্ড */}
          <li>
            <NavLink
              to="/notice-board"
              className="hover:text-blue-600 duration-200"
            >
              নোটিশ বোর্ড
            </NavLink>
          </li>

          {/* ভর্তি তথ্য */}
          <li className="relative group">
            <span className="hover:text-blue-600 duration-200 cursor-pointer">
              ভর্তি তথ্য
            </span>
            <ul className="absolute left-0 mt-2 w-56 bg-blue-700 shadow-md rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
              <li>
                <NavLink
                  to="/admission/application-form"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ভর্তি আবেদন ফরম
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission/results"
                  className="block px-4 py-2 hover:bg-blue-400 duration-200"
                >
                  ভর্তি ফলাফল
                </NavLink>
              </li>
            </ul>
          </li>

          {/* ফলাফল */}
          <li>
            <NavLink to="/results" className="hover:text-blue-600 duration-200">
              ফলাফল
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

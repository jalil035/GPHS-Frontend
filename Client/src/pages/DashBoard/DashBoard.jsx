import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoardNav from "../../Shared/DashBoardNav";
import DashboardSideNav from "./DashboardSideNav";
import DashBoardCardSection from "./DashBoardCardSection";

const DashBoard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoardNav />} />
      </Routes>
      <div className="flex min-h-screen">
        <div className="bg-gray-900 sm:w-[30%] md:w-[20%] lg:w-[15%]">
          <Routes>
            <Route path="/" element={<DashboardSideNav />} />
          </Routes>
        </div>
        <div className=" sm:w-[70%] md:w-[80%] lg:w-[85%] bg-gray-200">
          <Routes>
            <Route path="/" element={<DashBoardCardSection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoardNav = () => {
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="bg-gray-950 p-4 flex justify-between ">
        <h1 className="text-sm md:text-2xl font-bold text-yellow-400">
          Ghorashal Pilot High School
        </h1>
        <button
          onClick={handelLogout}
          className="text-white md:p-2 border border-white hover:bg-white hover:text-black"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashBoardNav;

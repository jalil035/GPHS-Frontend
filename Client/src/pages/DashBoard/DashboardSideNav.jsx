import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import DashBoardNav from "../../Shared/DashBoardNav";

const DashBoardSideNav = () => {
  const [adminName, setAdminName] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("/api/admin/getDetails", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdminName(res.data.data[0].fullName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdmin();
  }, []);

  useEffect(() => {
    const intervel = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      });
      const formattedTime = now.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(intervel);
  }, []);

  const handelNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div>
        <h1 className="md:text-2xl md:p-4 font-bold text-white text-center">
          DashBoard
        </h1>
        <img
          src="https://img.freepik.com/free-vector/flat-design-educational-logo_23-2148574049.jpg"
          alt="Admin Avatar"
          className="w-full max-w-[80px] sm:max-w-[40px] md:max-w-[96px] h-full max-h-[80px] sm:max-h-[40px] md:max-h-[96px] rounded-full mx-auto p-2"
        />
        <h2 className="text-yellow-400 md:text-2xl text-center font-semibold">
          {adminName || "Loading..."}
        </h2>{" "}
        <h2 className="text-white text-center font-semibold">{currentDate}</h2>
        <h2 className="text-white text-center font-semibold">{currentTime}</h2>
        <hr className="my-2" />
        <button
          onClick={() => handelNavigate("/teachers")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Teachers
        </button>
        <button
          onClick={() => handelNavigate("/students")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Student
        </button>
        <button
          onClick={() => handelNavigate("/download")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Download
        </button>
        <button
          onClick={() => handelNavigate("/noticeboard")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Notice Board
        </button>
        <button
          onClick={() => handelNavigate("/admission")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Admission
        </button>
        <button
          onClick={() => handelNavigate("/result")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Result
        </button>
        <button
          onClick={() => handelNavigate("/academic")}
          className="text-white md:p-2 sm:text-lg md:text-xl min-w-full mt-4
             border-l-4 border-l-transparent
             transition-all duration-300 ease-in-out
             hover:bg-gray-800 hover:border-l-green-600 hover:translate-x-2"
        >
          Academic
        </button>
      </div>
    </div>
  );
};

export default DashBoardSideNav;

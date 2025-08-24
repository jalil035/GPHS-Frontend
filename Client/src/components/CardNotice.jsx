import { useEffect, useState } from "react";
import axios from "axios";

const CardNotice = () => {
  const [Notices, setNotice] = useState([]);

  useEffect(() => {
    const getNotice = async () => {
      try {
        const res = await axios.get("/api/noticeBoard/getAll?noticeType=board");
        setNotice(res.data.data.slice(0, 5));
      } catch (error) {
        console.log("Error Fetching Notice", error);
      }
    };
    getNotice();
  }, []);
  return (
    <div className="bg-white shadow-md mt-10 border border-gray-300">
      <div className="bg-blue-800 h-12 mb-4 flex justify-center items-center">
        <h2 className="text-2xl text-white font-extrabold">নোটিশ বোর্ড</h2>
      </div>
    </div>
    
    {Array.isArray(Notices) && Notices.length > 0 ?(
      <table className="min-w-full">
      
      </table>
    ) } 
  );
};

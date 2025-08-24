import { useState, useEffect } from "react";
import axios from "axios";

const CardNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getNotices = async () => {
      try {
        const res = await axios.get("/api/noticeBoard/getAll?noticeType=board");
        setNotices(res.data.data.slice(0, 7));
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    getNotices();
  }, []);

  return (
    <div className="bg-white rounded shadow mb-12 mt-12 border border-gray-400">
      <div className="bg-blue-600 h-12 flex justify-center items-center">
        <h2 className="text-2xl text-white font-extrabold">নোটিশ বোর্ড</h2>
      </div>
      {Array.isArray(notices) && notices.length > 0 ? (
        <div className="overflow-x-auto px-4 pb-4">
          <table className="min-w-full table-auto border border-gray-300">
            <tbody>
              {notices.map(({ _id, subject, files, date }, index) => (
                <tr key={_id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border text-blue-600 hover:underline cursor-pointer">
                    <a
                      href={`http://localhost:5050/${files[0].filePath.replace(
                        /\\/g,
                        "/"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subject}
                    </a>
                  </td>
                  <td className="px-4 py-2 border">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      day: "numeric",
                      month: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No notices available.</p>
      )}
    </div>
  );
};

export default CardNotice;

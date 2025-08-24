import { useRef, useEffect, useState } from "react";
import axios from "axios";

const MarqueeNotice = () => {
  const [Notices, setNotices] = useState([]);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const fetchingMarqueeNotice = async () => {
      try {
        const res = await axios.get(
          "/api/noticeBoard/getAll?noticeType=marquee"
        );
        setNotices(res.data.data || []);
      } catch (error) {
        console.log("Error Fetching Notice", error);
      }
    };
    fetchingMarqueeNotice();
  }, []);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="bg-orange-100 border-l-4 border-r-4 border-orange-500 text-orange-700 font-medium py-2 overflow-hidden relative">
      <div
        ref={marqueeRef}
        className="whitespace-nowrap animate-marquee cursor-pointer"
        style={{ animationDuration: `${Math.max(Notices.length * 10, 20)}s` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Notices.length > 0 ? (
          Notices.map(({ _id, subject }, index) => (
            <span key={_id || index} className="mr-16">
              {subject}
            </span>
          ))
        ) : (
          <span className="mr-16">No Notices Available</span>
        )}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: inline-block;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-play-state: running;
          }
        `}
      </style>
    </div>
  );
};

export default MarqueeNotice;

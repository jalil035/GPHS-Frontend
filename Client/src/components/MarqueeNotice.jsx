import React, { useRef } from "react";

const notices = [
  "নোটিশ ১: আগামীকাল ছুটির ঘোষণা করা হয়েছে।",
  "নোটিশ ২: নতুন ভর্তি ফরম পাওয়া যাবে অফিস থেকে।",
  "নোটিশ ৩: আগামী সপ্তাহে পরীক্ষা শুরু হবে।",
  "নোটিশ ৪: বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ১৫ আগস্ট।",
];

const MarqueeNotice = () => {
  const marqueeRef = useRef(null);

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
        style={{ animationDuration: `${notices.length * 12}s` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {notices.map((notice, index) => (
          <span key={index} className="mr-16">
            {notice}
          </span>
        ))}
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

const notices = [
  {
    id: 1,
    text: "নোটিশ ১: আগামীকাল ছুটির ঘোষণা করা হয়েছে।",
    pdfUrl: "/pdfs/holiday_notice.pdf",
  },
  {
    id: 2,
    text: "নতুন ভর্তি ফরম পাওয়া যাবে অফিস থেকে।",
    pdfUrl: "/pdfs/admission_form.pdf",
  },
  {
    id: 3,
    text: "আগামী সপ্তাহে পরীক্ষা শুরু হবে।",
    pdfUrl: "/pdfs/exam_schedule.pdf",
  },
  {
    id: 4,
    text: "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ১৫ আগস্ট।",
    pdfUrl: "/pdfs/sports_event.pdf",
  },
  {
    id: 5,
    text: "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ১৫ আগস্ট।",
    pdfUrl: "/pdfs/sports_event.pdf",
  },
  {
    id: 6,
    text: "বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা ১৫ আগস্ট।",
    pdfUrl: "/pdfs/sports_event.pdf",
  },
  {
    id: 7,
    text: "নতুন ভর্তি ফরম পাওয়া যাবে অফিস থেকে।",
    pdfUrl: "/pdfs/admission_form.pdf",
  },
];

const CardNotice = () => {
  return (
    <div className="bg-white rounded shadow mt-10 border border-gray-400 h-auto">
      <div className="bg-blue-600 h-12 mb-4 flex justify-center items-center">
        <h2 className="text-2xl text-white font-extrabold">নোটিশ বোর্ড</h2>
      </div>
      <ul className="list-disc list-inside space-y-1 p-5">
        {notices.map(({ id, text, pdfUrl }) => (
          <li key={id}>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              download
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardNotice;

import image from "../assets/Principal.png";

const content = {
  title: "প্রধান শিক্ষকের কথা",
  description: `ঘোড়াশাল পাইলট উচ্চ বিদ্যালয় শুধুমাত্র একটি শিক্ষাপ্রতিষ্ঠান নয় — এটি একটি ইতিহাস, একটি উত্তরাধিকার, একটি আলোকবর্তিকা। ১৯৫০ সালে প্রতিষ্ঠিত এই বিদ্যালয় দীর্ঘদিন ধরে আলোকিত করেছে এ অঞ্চলের শিক্ষা, সংস্কৃতি ও নৈতিকতার পথ।

আমরা বিশ্বাস করি, প্রতিটি শিক্ষার্থীই আলাদা প্রতিভার অধিকারী। তাদের মাঝে সুপ্ত যে সম্ভাবনা রয়েছে, তা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ। আধুনিক প্রযুক্তিনির্ভর শিক্ষা, নৈতিক চর্চা এবং সহপাঠ কার্যক্রমের সমন্বয়ে আমরা গড়ে তুলতে চাই আগামীর আলোকিত মানুষ।

এই বিদ্যালয়ের প্রাক্তন ও বর্তমান সকল শিক্ষক, শিক্ষার্থী, অভিভাবক ও শুভানুধ্যায়ীদের প্রতি আমি আন্তরিক কৃতজ্ঞতা প্রকাশ করছি। আপনাদের ভালোবাসা ও সহযোগিতাতেই ঘোড়াশাল পাইলট উচ্চ বিদ্যালয় আজ একটি ঐতিহ্যের নাম।

আসুন, আমরা সবাই মিলে এই ঐতিহ্যকে আরও উজ্জ্বল করি এবং ভবিষ্যৎ প্রজন্মের জন্য একটি শিক্ষার আদর্শ বাতিঘর গড়ে তুলি।

শুভ কামনায়,
ওবায়দুর রহমান তালুকদার
প্রধান শিক্ষক
ঘোড়াশাল পাইলট উচ্চ বিদ্যালয়
ঘোড়াশাল, পলাশ, নরসিংদী।`,
};

const CardHeadmaster = () => {
  const paragraphs = content.description.split("\n\n");

  return (
    <div className="bg-white rounded shadow-md text-center border border-gray-500">
      <div className="bg-blue-600 h-12 mb-4 flex justify-center items-center">
        <h2 className="text-2xl text-white font-semibold">{content.title}</h2>
      </div>

      <img
        src={image}
        alt="প্রধান শিক্ষক"
        className="mx-auto mb-2 rounded-full w-52 h-52 object-fill border border-blue-600 shadow-md"
      />

      <div className="p-6 text-justify space-y-4 leading-relaxed">
        {paragraphs.map((para, index) => {
          if (index === paragraphs.length - 1) {
            return (
              <p key={index} className="leading-snug text-left">
                {para.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            );
          }
          return <p key={index}>{para}</p>;
        })}
      </div>
    </div>
  );
};

export default CardHeadmaster;

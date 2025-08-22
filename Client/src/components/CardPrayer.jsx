const prayer = {
  title: "বিদ্যালয় প্রার্থনা",
  description: `হে সর্বশক্তিমান আল্লাহ,  
আমাদের জ্ঞান দাও,  
সততার সাথে চলার শক্তি দাও,  
অভিভাবক, শিক্ষক ও দেশের প্রতি দায়িত্ব পালনের শিক্ষা দাও।

হে প্রভু,  
আমাদের হৃদয়কে পবিত্র করো,  
বুদ্ধিকে প্রখর করো,  
এবং আমাদেরকে সত্য ও ন্যায়ের পথে পরিচালিত করো।

আমরা যেন মানুষ হয়ে  
মানুষের কল্যাণে নিজেকে উৎসর্গ করতে পারি,  
দেশ ও জাতির গৌরব বৃদ্ধি করতে পারি।

আমীন`,
};

const CardPrayer = () => (
  <div className="bg-white rounded shadow mb-12 mt-12 border border-gray-400">
    <div className="bg-blue-600 h-12 mb-4 flex justify-center items-center">
      <h2 className="text-2xl text-white font-extrabold">{prayer.title}</h2>
    </div>
    <div className="p-6 leading-loose">
      {prayer.description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);

export default CardPrayer;

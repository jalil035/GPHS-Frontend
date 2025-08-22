const songs = {
  title: "School Song",
  description: `Raise your voice and sing with pride,
Hearts united, side by side.
Through the years, we’ll always be,
Bound by love and loyalty.`,
};

const CardSong = () => (
  <div className="bg-white rounded shadow mb-12 mt-12 border border-gray-400">
    <div className="bg-blue-600 h-12 mb-4 flex justify-center items-center">
      <h2 className="text-2xl text-white font-extrabold">{songs.title}</h2>
    </div>
    <div className="p-6 leading-relaxed">
      {songs.description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);

export default CardSong;

import image from "../assets/Principal.png";

const CardHeadmaster = () => (
  <div className="bg-white rounded shadow-md text-center border border-gray-500">
    <div className=" bg-blue-600 h-12 mb-4 flex justify-center items-center">
      <h2 className="text-2xl text-white font-semibold">প্রধান শিক্ষকের কথা</h2>
    </div>
    <img
      src={image}
      alt="প্রধান শিক্ষক"
      className="mx-auto mb-4 rounded-full w-80 h-80 object-fill"
    />
    <p className="p-8 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sint, saepe
      quaerat fugit quia eum reprehenderit dignissimos, minima repudiandae
      recusandae aperiam magni dolore quo fugiat autem, itaque ad debitis ipsam
      numquam rem quasi modi natus expedita accusamus. Alias rem cupiditate, est
      eum adipisci, reiciendis itaque ipsam asperiores modi et vero
      necessitatibus veritatis natus beatae nostrum qui reprehenderit, omnis
      illum quibusdam corporis nobis cum! Facere commodi, ea praesentium aliquid
      quos quae cupiditate excepturi aperiam fugiat placeat ex officiis amet
      neque hic molestiae dolore esse? Tempora id sed vero aperiam officiis
      cupiditate obcaecati ab voluptas quos. Obcaecati sit laboriosam
      voluptates. Placeat, eum.
    </p>
  </div>
);

export default CardHeadmaster;

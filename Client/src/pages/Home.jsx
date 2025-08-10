import React from "react";
import ImageSlider from "../components/ImageSlider";
import MarqueeNotice from "../components/MarqueeNotice";
import CardHistory from "../components/CardHistory";
import CardNotice from "../components/CardNotice";
import CardFacilities from "../components/CardFacilities";
import CardPrayer from "../components/CardPrayer";
import CardSong from "../components/CardSong";
import CardHeadmaster from "../components/CardHeadmaster";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <ImageSlider />
      <MarqueeNotice />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - 70% */}
        <div className="lg:w-7/12 space-y-6">
          <CardHistory />
          <CardHeadmaster />
        </div>

        {/* Right side - 30% */}
        <div className="lg:w-5/12 space-y-6">
          <CardNotice />
          <CardFacilities />
          <CardPrayer />
          <CardSong />
        </div>
      </div>
    </div>
  );
};

export default Home;

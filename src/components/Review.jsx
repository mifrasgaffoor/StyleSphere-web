import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">
      {/* heading section */}
      <h1 className=" font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24 ">
        Feedbacks 😊
      </h1>

      {/* review card section */}
      <div className=" flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard
          name="Oliver"
          feedback={
            "absolutely love the variety of styles! Your website makes it easy to find   the perfect fashion pieces for any occasion"
          }
        />
        <ReviewCard
          name="Liam"
          feedback={`The quality of the clothing is top-notch, and the shipping was incredibly fast. A fantastic online shopping experience!"`}
        />
        <ReviewCard
          name="Sebastian"
          feedback={`The user-friendly interface and detailed product descriptions made my shopping experience enjoyable and stress-free.`}
        />
        <ReviewCard
          name="Sophia"
          feedback={`Your customer service team is exceptional! They were quick to respond and resolved my query with utmost professionalism`}
        />
      </div>
      <div className=" flex flex-col items-center xl:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard
          name="Elias"
          feedback={`The sizing guide was accurate, and the clothes fit perfectly. I appreciate the attention to detail in providing accurate measurements.`}
        />
        <ReviewCard
          name="Aurora"
          feedback={`The fashion trends showcased on your website are always up-to-date. It's my go-to place for staying stylish and on-trend.`}
        />
        <ReviewCard
          name="Amelia"
          feedback={`The return process was hassle-free. I appreciate the transparency and ease of returning items that didn't work for me.`}
        />
        <ReviewCard
          name="Scarlett"
          feedback={`The lookbook and styling tips provided great inspiration. It's helpful to see how pieces can be styled for different occasions.`}
        />
      </div>
    </div>
  );
};

export default Review;

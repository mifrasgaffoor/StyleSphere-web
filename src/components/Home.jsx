import React from "react";
import img from "../assets/img/hero.png";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
      {/* content section  */}
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
          Indulge in a world of elegance and sophistication as you explore our
          fashion!
        </h1>
        <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
          "Discover the art of self-expression through fashion on our platform,
          where every stitch is a statement and every outfit is a canvas for
          your personal style journey
        </p>

        <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          shop now 🛒
        </button>
      </div>

      {/* img section */}
      <div className=" bg-DarkColor p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-10">
        <img className=" -ml-5 -mb-5" width={680} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;

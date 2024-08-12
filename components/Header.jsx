import React from "react";
import { logo } from "@/app/assets/assets";
import Image from "next/image";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="py-5  bg-black px-5 md:px-12 lg:px-8">
      <Navbar/>
      <div className="h-[50vh] text-white w-full bg-[#181A1B] rounded-2xl flex-col text-center items-center flex justify-center">
        <h1 className="text-[3rem] font-bold mb-2">Latest blog</h1>
        <p className="w-[70%] text-center m-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tellus
          at neque vestibulum bibendum.dolor sit amet, consectetur adipiscing
          elit. Sed ac tellus
        </p>
        <div className="flex items-center justify-around">
          <input
            type="text"
            placeholder="Type here"
            className="input m-2 shadow-2xl shadow-blue-500/20 input-bordered input-primary w-full max-w-xs"
          />
          <button className="btn btn-active btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { logo } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="py-5  bg-black px-5 md:px-12 lg:px-8">
      <div className="h-[5rem] mb-[2rem] w-full bg-[#181A1B] text-white  rounded-full flex  justify-between  p-2">
        <div className="flex cursor-pointer gap-2 justify-between items-center">
          <Link href="/">
            <Image className="h-[4rem] ml-4 w-auto" src={logo} />
          </Link>
          <Link href="/">
            {" "}
            <h1 className="text-[2rem] font-extrabold">NEWS BLOG</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center mr-4">
          <Link href="/admin">
            <button className="btn btn-outline btn-success">Success</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

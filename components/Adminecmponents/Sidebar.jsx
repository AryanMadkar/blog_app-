import React from "react";
import Image from "next/image";
import { add_icon } from "@/app/assets/assets";
import { logo } from "@/app/assets/assets";
import { blog_icon, email_icon } from "@/app/assets/assets";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between border-r-4 min-w-[12rem] border-black min-h-[100vh]  bg-[#fff] text-black">
      <div className="px-2 sm:pl-14  rounded-2xl overflow-hidden py-3 flex items-center justify-center">
        <Link href="/">
          <Image
            className="rounded-2xl m-[0.5rem]   "
            src={logo}
            width={90}
            alt=""
          />
        </Link>
      </div>
      <div className="flex flex-col  mt-3 items-center rounded-2xl h-[100%]   gap-3 font-medium  bg-[#fff] p-2 text-black">
        <div className="bg-white mt-3 text-black p-3 rounded-2xl flex items-center justify-center hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer gap-2 ">
          <Link
            className="flex items-center justify-between"
            href="/admin/addProduct"
          >
            <Image src={add_icon} alt="" width={28} />
            <p>Add blogs</p>
          </Link>
        </div>

        <div className="bg-white mt-3 text-black p-3 rounded-2xl flex items-center justify-center hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer gap-2 ">
          <Link
            className="flex items-center justify-between"
            href="/admin/Bloglist"
          >
            <Image src={blog_icon} alt="" width={28} />
            <p>BLog lists</p>
          </Link>
        </div>

        <div className="bg-white mt-3 text-black p-3 rounded-2xl flex items-center justify-center hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer gap-2 ">
          <Link
            className="flex items-center justify-between"
            href="/admin/Subscriptions"
          >
            <Image src={email_icon} alt="" width={28} />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

"use client";
import { blog_data } from "@/app/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  facebook_icon,
  googleplus_icon,
  twitter_icon,
} from "@/app/assets/assets";
import axios from "axios";
const page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchblogdata = async () => {
    const response = await axios.get("/api/Blog", {
      params: { id: params.id },
    });
    setData(response.data);
  };
  useEffect(() => {
    fetchblogdata();
  }, []);
  return data ? (
    <>
      <div className="bg-black  h-fit min-h-[280vh] w-full ">
        <Navbar />
        <div className=" my-24">
          <h1 className="text-4xl max-w-[700px] font-semibold  mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt=""
            width={60}
            height={60}
            className="rounded-full mx-auto mt-6 border-2 border-white "
          ></Image>
          <p className="mt-2 text-center text-xl text-white pb-2 max-w-[740px] mx-auto">
            {data.author}
          </p>
          <div className="mx-5 bg-black mt-[100px] max-w-[800px]  md:mx-auto mb-10">
            <Image
              src={data.image}
              alt=""
              width={1280}
              height={720}
              className="rounded-lg border-4 border-black "
            />
          </div>
          <div className=" m-[3rem]">
            <h1 className=" text-start  text-4xl font-semibold">
              Introduction:
            </h1>
            <p className=" text-start">{data.description}</p>
          </div>
          <div className="bg-[#181A1B] mt-2  p-2 rounded-2xl">
            {" "}
            <h3 className="my-5 text-[18px] font-semibold">{data.heading}</h3>
            <p>{data.steps}</p>
            <h3 className="my-5 text-[18px] font-semibold">{data.heading}</h3>
            <p>{data.steps}</p>
            <h3 className="my-5 text-[18px] font-semibold">{data.heading}</h3>
            <p>{data.steps}</p>
            <div className="mt-12">
              <h1>Share this on social media </h1>
              <div className="flex items-start justify-start">
                <Image src={facebook_icon} />
                <Image src={twitter_icon} />
                <Image src={googleplus_icon} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;

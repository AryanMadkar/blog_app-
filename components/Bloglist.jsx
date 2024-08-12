"use client";
import { blog_data } from "@/app/assets/assets";
import React, { useEffect, useState } from "react";
import Blogitem from "./Blogitem";
import axios from "axios";

const Bloglist = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  console.log(menu);

  const fetchBlocks = async () => {
    try {
      const response = await axios("/api/Blog");
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
      console.log("hello");
    } catch (error) {
      console.error("Failed to fetch blocks", error);
    }
  };

  useEffect(() => {
    fetchBlocks();
  }, []);

  return (
    <div className="bg-[#181A1B] mt-[0.5rem] m-[2rem] p-[1rem] rounded-2xl overflow-hidden">
      <div className="flex justify-center gap-6 my-10  ">
        <button
          onClick={() => {
            setMenu("All");
          }}
          className={
            menu === "All"
              ? "bg-white active active:bg-black active:text-white text-black py-1 px-4 rounded-md"
              : ""
          }
        >
          All
        </button>
        <button
          onClick={() => {
            setMenu("Technology");
          }}
          className={
            menu === "Technology"
              ? "bg-white active active:bg-black active:text-white text-black py-1 px-4 rounded-md"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => {
            setMenu("Startup");
          }}
          className={
            menu === "Startup"
              ? "bg-white active active:bg-black active:text-white text-black py-1 px-4 rounded-md"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => {
            setMenu("Lifestyle");
          }}
          className={
            menu === "Lifestyle"
              ? "bg-white active active:bg-black active:text-white text-black py-1 px-4 rounded-md"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-2 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <Blogitem
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                key={index}
                id={item._id}
                heading={item.heading}
                steps={item.steps}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Bloglist;

"use client";
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { upload_area } from "@/app/assets/assets";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "startup",
    author: "ALex Bennett",
    author_img: "/author_img.png",
    heading: "",
    swift: "",
    });

  const onchangehander = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };

  const onsubmithandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("category", data.category);
    formdata.append("author", data.author);
    formdata.append("image", image);
    formdata.append("author_img", data.author_img);
    formdata.append("heading", data.heading);
    formdata.append("steps", data.swift);
    const res = await axios.post("/api/Blog", formdata);
    if (res.data.success) {
      toast.success(res.data.message);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "startup",
        author: "ALex Bennett",
        author_img: "/author_img.png",
        heading: "",
        swift: "",
      });
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="m-[1rem]">
      <form onSubmit={onsubmithandler} className="pt-5  px-5 sm:pt-12 sm:pl-16">
        <div className="flex flex-row items-center justify-around">
          <div>
            <p className="text-xl">Uplode Thumbnail</p>
            <label htmlFor="image">
              <Image
                width={140}
                height={70}
                alt=""
                className="mt-4 cursor-pointer "
                src={!image ? upload_area : URL.createObjectURL(image)}
              />
            </label>
            <input
              className="hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              required
              hidden
            />
          </div>
        </div>

        <div>
          {" "}
          <p className="text-xl mt-4 ">Blog title</p>
          <input
            name="title"
            onChange={onchangehander}
            value={data.title}
            type="text"
            placeholder="Enter the blog title "
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] border-black"
          />
        </div>
        <div>
          <p className="text-xl mt-4 ">Blog Description</p>
          <textarea
            name="description"
            onChange={onchangehander}
            value={data.description}
            type="text"
            placeholder="Enter the blog Description "
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(45,78,255,_0.7)] border-black"
          />
        </div>

        <div>
          {" "}
          <p className="text-xl mt-4 ">Blog Heading</p>
          <input
            name="heading"
            onChange={onchangehander}
            value={data.heading}
            type="text"
            placeholder="Enter the blog Heading"
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(116,238,21,_0.7)] border-black"
          />
        </div>

        <div>
          <p className="text-xl mt-4 ">Blog</p>
          <textarea
            name="swift"
            onChange={onchangehander}
            value={data.swift}
            type="text"
            placeholder="Enter the blog  "
            required
            className="w-full mt-4 px-4 py-3 border hover:shadow-[0_10px_20px_rgba(254,0,0,_0.7)] border-black"
          />
        </div>
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-xl mt-4">Blog Categeory</p>
            <select
              name="category"
              onChange={onchangehander}
              value={data.category}
              className="w-40 mt-4 px-4 py-3 border text-gray-500"
            >
              <option>Select Categeory</option>
              <option value="startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-outline m-[1rem] w-[15vw]  btn-accent"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;

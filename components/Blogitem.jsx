import { arrow, blog_data } from "@/app/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react"; 

const Blogitem = ({ title, description, image, category,id,heading,steps }) => {
  return (
    <div className=" bg-black max-w-[330px]  sm:max-w-[330px]  border-2  rounded-xl overflow-hidden border-black hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
    <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt="image"
        width={400}
        height={400}
        className="border-b border-black"
      />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 font-semibold text-lg tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight  text-white">{description}</p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center gap-2 text-white font-semibold">
          Read More
          <Image src={arrow} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;

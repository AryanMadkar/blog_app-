import { NextResponse } from "next/server";
import connectdb from "./../../../lib/config/db";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/Blogmodel";

const loaddb = async () => {
  try {
    await connectdb();
    console.log("connected to database");
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};

loaddb();

export async function GET(request) {
  try {
    const blogid = request.nextUrl.searchParams.get("id");
    if (blogid) {
      const blog = await blogModel.findById(blogid);
      return NextResponse.json(blog);
    } else {
      const blogs = await blogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Failed to process request", error);
    return NextResponse.status(500).json({
      message: "Something went wrong in routes ",
    });
  }
}

export async function POST(request) {
  try {
    const formdata = await request.formData();
    const timeStamp = new Date().getTime();

    const image = formdata.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);
    const imageurl = `/${timeStamp}_${image.name}`;

    const blogData = {
      title: `${formdata.get("title")}`,
      description: `${formdata.get("description")}`,
      category: `${formdata.get("category")}`,
      author: `${formdata.get("author")}`,
      image: `${imageurl}`,
      author_img: `${formdata.get("author_img")}`,
      heading: `${formdata.get("heading")}`,
      steps: `${formdata.get("steps")}`,
      createdAt: new Date(),
    };

    await blogModel.create(blogData);
    console.log("posting request");

    return NextResponse.json({ success: true, message: "blog added" });
  } catch (error) {
    console.error("Failed to process request", error);
    return NextResponse.status(500).json({
      message: "Something went wrong in routes ",
    });
  }
}

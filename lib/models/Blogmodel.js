import mongoose from "mongoose";

const Blogschema = new mongoose.Schema({
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  category: { type: "string", required: true },
  author: { type: "string", required: true },
  image: { type: "string", required: true },
  author_img: { type: "string", required: true },
  steps: { type: "string", required: true },
  heading: { type: "string", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const blogModel = mongoose.models.Blog || mongoose.model("Blog", Blogschema);

export default blogModel;

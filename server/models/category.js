import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [20, "Name cannot exceed 20 characters"],
    required: true,
  },
  about: {
    type: String,
    maxLength: [200, "Name cannot exceed 200 characters"],
    required: true,
  },
  editor: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
  topics: [
    {
      name: {
        type: String,
        maxLength: [20, "Name cannot exceed 20 characters"],
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
    },
  ],
  tags: [{ type: mongoose.Schema.ObjectId, ref: "tag" }],
});

export const Category = new mongoose.model("category", CategorySchema);

import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: [100, "Title can not be more than 100 characters long"],
  },
  content: {
    type: String,
    required: true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  publisher: { type: mongoose.Schema.ObjectId, ref: "user" },
  status: {
    type: String,
    default: "published",
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
      rating: {
        type: Number,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "category",
  },
  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "tag",
    },
  ],
  topic: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.statics.search = async function (keyword) {
  return this.find({
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { content: { $regex: keyword, $options: "i" } },
      { topic: { $regex: keyword, $options: "i" } },
    ],
  })
    .populate("publisher", "name")
    .populate("category");
};

export const Post = new mongoose.model("post", PostSchema);

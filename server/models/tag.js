import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [20, "Name cannot exceed 20 characters"],
    required: true,
  },
});

export const Tag = new mongoose.model("tag", tagSchema);

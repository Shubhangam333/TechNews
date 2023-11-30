import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [20, "Name cannot exceed 20 characters"],
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

export const Topic = new mongoose.model("topic", topicSchema);

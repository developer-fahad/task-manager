import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Works = mongoose.models.Work || mongoose.model("Work", workSchema);
export default Works;

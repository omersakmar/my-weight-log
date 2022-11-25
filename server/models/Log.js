import mongoose from "mongoose";
const LogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Log", LogSchema);

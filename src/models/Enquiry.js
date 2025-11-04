import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Client email is required"],
      lowercase: true,
      trim: true,
    },
    courseInterest: {
      type: String,
      required: [true, "Please mention course interest"],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // null => unclaimed (public)
    },
    claimedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);

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
    },
    courseInterest: {
      type: String,
      required: [true, "Please mention course interest"],
    },
    claimedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, // null = not claimed yet
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);

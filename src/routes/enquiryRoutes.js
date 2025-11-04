import express from "express";
import Enquiry from "../models/Enquiry.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// 1️⃣ Public endpoint — anyone can submit an enquiry
router.post("/public", async (req, res) => {
  try {
    const { name, email, courseInterest } = req.body;

    const newEnquiry = new Enquiry({ name, email, courseInterest });
    await newEnquiry.save();

    res.status(201).json({
      message: "Enquiry submitted successfully!",
      enquiry: newEnquiry,
    });
  } catch (error) {
    console.error("Error submitting enquiry:", error.message);
    res
      .status(500)
      .json({ message: "Error submitting enquiry", error: error.message });
  }
});

// 2️⃣ Get all public (unclaimed) enquiries
router.get("/public", authMiddleware, async (req, res) => {
  try {
    const publicEnquiries = await Enquiry.find({ claimedBy: null }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      message: "Unclaimed enquiries fetched",
      enquiries: publicEnquiries,
    });
  } catch (error) {
    console.error("Error fetching public enquiries:", error.message);
    res.status(500).json({
      message: "Error fetching public enquiries",
      error: error.message,
    });
  }
});

// 3️⃣ Claim an enquiry
router.post("/claim/:id", authMiddleware, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) return res.status(404).json({ message: "Enquiry not found" });
    if (enquiry.claimedBy)
      return res
        .status(400)
        .json({ message: "Enquiry already claimed by another user" });

    enquiry.claimedBy = req.user.id;
    await enquiry.save();

    res.status(200).json({ message: "Enquiry claimed successfully!", enquiry });
  } catch (error) {
    console.error("Error claiming enquiry:", error.message);
    res
      .status(500)
      .json({ message: "Error claiming enquiry", error: error.message });
  }
});

// 4️⃣ Get all enquiries claimed by logged-in user
router.get("/private", authMiddleware, async (req, res) => {
  try {
    const myEnquiries = await Enquiry.find({ claimedBy: req.user.id }).sort({
      createdAt: -1,
    });
    res
      .status(200)
      .json({ message: "Your claimed enquiries", enquiries: myEnquiries });
  } catch (error) {
    console.error("Error fetching private enquiries:", error.message);
    res.status(500).json({
      message: "Error fetching private enquiries",
      error: error.message,
    });
  }
});

export default router;

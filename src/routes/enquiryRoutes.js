// src/routes/enquiryRoutes.js
import express from "express";
import {
  submitPublicEnquiry,
  getPublicEnquiries,
  claimEnquiry,
  getPrivateEnquiries,
} from "../controllers/enquiryController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// small validator middleware for convenience
const validate = (req, res, next) => {
  const errs = validationResult(req);
  if (!errs.isEmpty()) return res.status(400).json({ errors: errs.array() });
  next();
};

// Public submission (no auth)
router.post(
  "/public",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("courseInterest")
      .notEmpty()
      .withMessage("Course interest is required"),
  ],
  validate,
  submitPublicEnquiry
);

// Get unclaimed enquiries (auth)
router.get("/public", authMiddleware, getPublicEnquiries);

// Claim an enquiry (auth)
router.post("/claim/:id", authMiddleware, claimEnquiry);

// Get claimed enquiries for current user (auth)
router.get("/private", authMiddleware, getPrivateEnquiries);

export default router;

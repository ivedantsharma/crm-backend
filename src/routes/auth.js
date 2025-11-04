import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { registerValidation, loginValidation } from "../utils/validator.js";
import { validationResult } from "express-validator";

const router = express.Router();

// Middleware to check validation results
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Register
router.post("/register", registerValidation, validateRequest, registerUser);

// Login
router.post("/login", loginValidation, validateRequest, loginUser);

export default router;

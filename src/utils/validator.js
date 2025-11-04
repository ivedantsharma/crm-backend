// src/utils/validator.js
import { body } from "express-validator";

/** 🔹 Validation for user registration */
export const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

/** 🔹 Validation for login */
export const loginValidation = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

/** 🔹 Validation for contacts */
export const contactValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("phone")
    .optional()
    .isMobilePhone()
    .withMessage("Enter valid phone number"),
  body("message").notEmpty().withMessage("Message is required"),
];

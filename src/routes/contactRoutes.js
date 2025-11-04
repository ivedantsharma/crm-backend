import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST new contact (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create contact and attach logged-in user's ID
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      createdBy: req.user.id, // comes from JWT middleware
    });

    await newContact.save();
    res.status(201).json({ message: "Contact created", contact: newContact });
  } catch (error) {
    console.error("Error adding contact:", error.message);
    res
      .status(500)
      .json({ message: "Error adding contact", error: error.message });
  }
});

// Get all contacts for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find({ createdBy: req.user.id }).sort({
      _id: -1,
    });
    res.status(200).json({ message: "Contacts fetched", contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
});

// Get a single contact by ID (only if created by logged-in user)
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact fetched", contact });
  } catch (error) {
    console.error("Error fetching contact:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching contact", error: error.message });
  }
});

// Update a contact (only if created by logged-in user)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.id },
      { name, email, phone, message },
      { new: true, runValidators: true }
    );
    if (!contact)
      return res
        .status(404)
        .json({ message: "Contact not found or unauthorized" });
    res.status(200).json({ message: "Contact updated successfully", contact });
  } catch (error) {
    console.error("Error updating contact:", error.message);
    res
      .status(500)
      .json({ message: "Error updating contact", error: error.message });
  }
});

// Delete a contact (only if created by logged-in user)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });
    if (!contact)
      return res
        .status(404)
        .json({ message: "Contact not found or unauthorized" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error.message);
    res
      .status(500)
      .json({ message: "Error deleting contact", error: error.message });
  }
});

export default router;

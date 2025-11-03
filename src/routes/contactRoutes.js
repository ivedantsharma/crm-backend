import express from "express";
import Contact from "../models/Contact.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Add a new contact
router.post("/", authMiddleware, async (req, res) => {
  try {
    const contact = new Contact({ ...req.body, user: req.userId });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ Get all contacts of logged-in user
router.get("/", authMiddleware, async (req, res) => {
  const contacts = await Contact.find({ user: req.userId });
  res.json(contacts);
});

// ✅ Update contact
router.put("/:id", authMiddleware, async (req, res) => {
  const contact = await Contact.findOneAndUpdate(
    { _id: req.params.id, user: req.userId },
    req.body,
    { new: true }
  );
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.json(contact);
});

// ✅ Delete contact
router.delete("/:id", authMiddleware, async (req, res) => {
  const contact = await Contact.findOneAndDelete({
    _id: req.params.id,
    user: req.userId,
  });
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.json({ message: "Contact deleted" });
});

export default router;

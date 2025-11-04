import Contact from "../models/Contact.js";

// ✅ Get all contacts created by logged-in user
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ createdBy: req.user.id });
    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching contacts", error: error.message });
  }
};

// ✅ Add a new contact
export const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      message,
      createdBy: req.user.id,
    });
    res.status(201).json(contact);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding contact", error: error.message });
  }
};

// ✅ Update an existing contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    if (contact.createdBy.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Not authorized to update this contact" });
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating contact", error: error.message });
  }
};

// ✅ Delete a contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    if (contact.createdBy.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Not authorized to delete this contact" });
    }

    await contact.deleteOne();
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting contact", error: error.message });
  }
};

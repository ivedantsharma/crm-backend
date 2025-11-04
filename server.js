// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/utils/db.js";
import authRoutes from "./src/routes/auth.js";
import authMiddleware from "./src/middleware/authMiddleware.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import enquiryRoutes from "./src/routes/enquiryRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/enquiry", enquiryRoutes);
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.email}!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// src/middleware/authMiddleware.js
import jwt from "jsonwebtoken";

/**
 * Protect routes: verifies Authorization header "Bearer <token>"
 * Attaches decoded payload to req.user
 */
export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1].trim();
    if (!token) return res.status(401).json({ message: "No token provided" });

    // IMPORTANT: Ensure env var name is correct
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error("JWT_SECRET is not set in environment");
      return res.status(500).json({ message: "Server misconfiguration" });
    }

    const decoded = jwt.verify(token, secret);
    // decoded usually contains: { id, email, iat, exp }
    req.user = decoded;
    return next();
  } catch (err) {
    console.error("authMiddleware error:", err.message || err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export default authMiddleware;

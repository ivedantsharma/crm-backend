export const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err.stack || err.message);

  // Default values
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // If MongoDB validation or cast errors occur
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      message: "Validation error",
      errors,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: `Invalid ${err.path}: ${err.value}`,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

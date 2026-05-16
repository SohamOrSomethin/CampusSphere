
console.log("=== APP.JS LOADED ===");
import express from "express";


import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import authRoutes from "./routes/auth.routes.js";

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
console.log("Auth routes mounted at /api/auth");
// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "CampusSphere backend is running",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    status: 404,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: err.name || "Internal Server Error",
    status: err.status || 500,
    message: err.message || "Something went wrong",
  });
});

export default app;
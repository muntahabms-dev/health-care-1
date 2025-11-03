// server.js (CommonJS version)

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Your frontend runs on 127.0.0.1:5500
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.use(express.json());

// Test route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Appointment endpoint
app.post("/api/appointment", (req, res) => {
  const { doctor, specialization } = req.body || {};
  console.log("New appointment:", doctor, specialization);
  res.json({ status: "Appointment received" });
});

// Health dashboard endpoint
app.post("/api/health", (req, res) => {
  console.log("Health data:", req.body);
  res.json({ status: "Health data saved" });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

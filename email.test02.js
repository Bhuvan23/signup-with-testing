const express = require("express");
const app = express();

app.use(express.json());

app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;


  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }


  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters long" });
  }

  res.status(201).json({ message: "User registered successfully" });
});

module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3003;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Connected to MongoDB"));

// Dashboard schema
const dashboardSchema = new mongoose.Schema({
  type: String,
  content: String,
});
const DashboardItem = mongoose.model("DashboardItem", dashboardSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/dashboard", async (req, res) => {
  try {
    const dashboardItems = await DashboardItem.find();
    res.json(dashboardItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/dashboard", async (req, res) => {
  const dashboardItem = new DashboardItem({
    type: req.body.type,
    content: req.body.content,
  });
  try {
    const newDashboardItem = await dashboardItem.save();
    res.status(201).json(newDashboardItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

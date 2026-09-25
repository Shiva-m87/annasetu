require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB(); // connect to MongoDB before handling requests

app.use(cors());          // allow frontend to call this backend
app.use(express.json());  // parse incoming JSON request bodies

// Routes will be added here as we build them
// app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => res.send("AnnaSetu API running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

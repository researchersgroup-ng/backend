const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const lecturerRoutes = require("./routes/lecturerRoutes");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middlewares/errorHandler");



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/lecturer", lecturerRoutes);
app.use("/api/student", studentRoutes);
app.use(errorHandler);



app.get("/", (req, res) => {
  res.send("API running");
});

sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.error("DB error:", err));

module.exports = app;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb+srv://waran542:bigchi11@cluster0.wwk9f8t.mongodb.net/?appName=Cluster0")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error", err));

const userRoutes = require("./routes/formroute");

app.use("/user", userRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

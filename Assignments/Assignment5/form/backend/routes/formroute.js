// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { insertUser } = require("../controllers/formController");

router.post("/create-user", insertUser);

module.exports = router;

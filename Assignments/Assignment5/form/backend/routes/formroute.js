const express = require("express");
const router = express.Router();

const {
  insertUser,
  getUsers,
  updateUser,
  deleteUser
} = require("../controllers/formController");

router.post("/create", insertUser);
router.get("/all", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

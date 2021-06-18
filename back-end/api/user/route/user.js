const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("/srv/cloud.greyl.dev/config/auth.js");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getUserDetails);

module.exports = router;
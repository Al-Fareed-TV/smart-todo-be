const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/user.cjs");

router.post("/signup",signup);

router.post("/login", login);
router.post("/logout", );

module.exports = router;

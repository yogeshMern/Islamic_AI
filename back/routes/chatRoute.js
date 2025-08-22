const express = require("express");
const { chat } = require("../controllers/chatController");

const router = express.Router();

router.post("/chat", chat);

module.exports = router;

const express = require("express");
const router = express.Router();

const { EmailController } = require("../../controllers");

router.post("/tickets", EmailController.create);

module.exports = router;

const express = require("express");
const router = express.Router();

const WhatsappController = require("../controllers/whatsappControllers");
router
  .get("/", WhatsappController.VerifyToken)
  .post("/", WhatsappController.ReceiveMessages);

module.exports = router;

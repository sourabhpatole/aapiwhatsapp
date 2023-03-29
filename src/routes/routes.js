const express = require("express");
const app = express();

const WhatsappController = require("../controllers/whatsappControllers");
const router = express.Router();
router
  .get("/", WhatsappController.VerifyToken)
  .post("/", WhatsappController.ReceiveMessages);

module.exports = router;

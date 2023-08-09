const mongoose = require("mongoose");
const LunchWhatsappSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    foodChoice: {
      type: "String",
    },
    messageDate: {
      type: "String",
      default: "sourabh",
    },
  },
  { timestamps: true }
);
const whatsapplunch = new mongoose.model("whatsapplunch", LunchWhatsappSchema);
module.exports = whatsapplunch;

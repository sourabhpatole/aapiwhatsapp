const mongoose = require("mongoose");
const date = new Date();

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
      default: date.setDate(date.getDate() + 1);,
    },
  },
  { timestamps: true }
);
const whatsapplunch = new mongoose.model("whatsapplunch", LunchWhatsappSchema);
module.exports = whatsapplunch;

const mongoose = require("mongoose");
const currentDate = new Date(Date.now() + 3600 * 1000 * 24);
const day = currentDate.getDay();
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let finalDate = "";
if (dayNames[day] == "Thu") {
  finalDate = new Date(Date.now() + 3600 * 1000 * 48);
}
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
      default: finalDate,
    },
  },
  { timestamps: true }
);
const whatsapplunch = new mongoose.model("whatsapplunch", LunchWhatsappSchema);
module.exports = whatsapplunch;

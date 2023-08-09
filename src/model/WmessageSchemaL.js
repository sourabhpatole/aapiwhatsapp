const mongoose = require("mongoose");
const currentDate = new Date(Date.now() + 3600 * 1000 * 24);
const day = currentDate.getDay();
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = "";
if (dayNames[day] == "Thu") {
  date = new Date(Date.now() + 3600 * 1000 * 48);
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
      default: date,
    },
  },
  { timestamps: true }
);
const whatsapplunch = new mongoose.model("whatsapplunch", LunchWhatsappSchema);
module.exports = whatsapplunch;

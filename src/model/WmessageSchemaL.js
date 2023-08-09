const mongoose = require("mongoose");
const day = new Date(Date.now() + 3600 * 1000 * 24);
const holiday = day.getDay();
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let newDay;
if (dayNames[holiday] === "Thu") {
  newDay = new Date(Date.now() + 3600 * 1000 * 96);
} else {
  newDay = day;
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
      default: newDay,
    },
  },
  { timestamps: true }
);
const whatsapplunch = new mongoose.model("whatsapplunch", LunchWhatsappSchema);
module.exports = whatsapplunch;

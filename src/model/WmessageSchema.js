const mongoose = require("mongoose");
const WmessageSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    foodChoice: {
      type: "String",
    },
    messageDate: {
      type: "String",
      default: Date(
        Date.now().toLocaleString("en-Us", { timeZone: "Asia/Kolkata" })
      ),
    },
  },
  { timestamps: true }
);
const wmessagedb = new mongoose.model("whatsapp", WmessageSchema);
module.exports = wmessagedb;

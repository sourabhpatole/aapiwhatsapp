const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema(
  {
    rating: {
      type: "Number",
      required: true,
    },
    name: {
      type: "String",
    },
  },
  { timestamps: true }
);

const whatsappfeedback = new mongoose.model("whatsappfeedback", FeedbackSchema);

module.exports = whatsappfeedback;

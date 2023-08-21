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

const whatsappfeedbackdinner = new mongoose.model(
  "whatsappfeedbackdinner",
  FeedbackSchema
);

module.exports = whatsappfeedbackdinner;

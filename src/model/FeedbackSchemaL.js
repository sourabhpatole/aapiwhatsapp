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

const whatsappfeedbacklunch = new mongoose.model(
  "whatsappfeedbacklunch",
  FeedbackSchema
);

module.exports = whatsappfeedbacklunch;

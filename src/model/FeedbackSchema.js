const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
  rating: {
    type: "Number",
  },
});

const whatsappfeedback = new mongoose.model("whatsappfeedback", FeedbackSchema);

module.exports = whatsappfeedback;

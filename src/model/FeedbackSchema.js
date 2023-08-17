const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
  rating: {
    type: "Number",
  },
});

module.exports = FeedbackSchema;

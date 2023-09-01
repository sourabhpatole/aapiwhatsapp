const mongoose = require("mongoose");
const FoodChoiceSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
    },
    choice: {
      type: "Number",
      required: true,
    },
  },
  { timestamps: true }
);
const whatsappFoodChoice = new mongoose.model(
  "whatsappFoodChoice",
  FoodChoiceSchema
);
module.exports = whatsappFoodChoice;

const mongoose = require("mongoose");
const FoodChoiceSchema = new mongoose.Schema({
  choice: {
    type: "Number",
    required: true,
  },
  name: {
    type: "String",
  },
});
const whatsappFoodChoice = new mongoose.model(
  "whatsappFoodChoice",
  FoodChoiceSchema
);
module.exports = whatsappFoodChoice;

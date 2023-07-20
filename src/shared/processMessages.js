const { sendMessageWhatsapp } = require("../services/whatsappService");
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const {
  MessageText,
  MessageTemplate,
  MessageTemplateForNonVeg,
  MessageTemplateForVeg,
} = require("./whatsappModels");
const Process = (textUser, text, number) => {
  text = text.toLowerCase();
  console.log(text);
  let models = [];
  if (text.includes("hi")) {
    let model = MessageTemplate(text, number);
    models.push(model);
  } else if (text == "lunch-veg") {
    let model = MessageTemplateForVeg(
      `Thank you ${textUser} for choosing a vegetarian dish for _*Lunch*_. We will add it to our menu for you! `,
      number
    );

    models.push(model);
  } else if (text == "lunch-non-veg") {
    let model = MessageTemplateForNonVeg(
      `Awesome, ${textUser} you have chosen non-vegetarian dish for _*Lunch*_. We will add it to our menu for you!`,
      number
    );

    models.push(model);
  } else if (text == "dinner-veg") {
    let model = MessageTemplateForVeg(
      `Thank you ${textUser} for choosing a vegetarian dish for _*Dinner*_. We will add it to our menu for you! `,
      number
    );

    models.push(model);
  } else if (text == "dinner-non-veg") {
    let model = MessageTemplateForNonVeg(
      `Awesome, ${textUser} you have chosen non-vegetarian dish for _*Dinner_*. We will add it to our menu for you!`,
      number
    );

    models.push(model);
  } else {
    let model = MessageText(
      `Thank you for your valuable time ${textUser}! If you have any feedback or suggestions on how we can improve our service, please don’t hesitate to let us know. We look forward to serving you again soon!`,
      number
    );

    // let model = MessageText("Thank You!", number);
    models.push(model);
    // } else {
    //   let model = MessageText("retry: " + text, number);
    //   // let model = MessageTemplate("Great job!", number);
    //   models.push(model);
  }
  models.forEach((model) => sendMessageWhatsapp(model));
};

module.exports = { Process };

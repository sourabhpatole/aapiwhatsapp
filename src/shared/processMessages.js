const {
  sendMessageWhatsapp,
  sendMessageWhatsapp1,
} = require("../services/whatsappService");
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const {
  MessageText,
  MessageTemplate,
  MessageTemplateForFood,
  MessageTemplateFeedback,
  MessageTimeOver,
} = require("./whatsappModels");
const whatsapplunch = require("../model/WmessageSchemaL");
const whatsappdinner = require("../model/WmessageSchemaD");
const whatsappfeedbacklunch = require("../model/FeedbackSchemaL");
const whatsappfeedbackdinner = require("../model/FeedbackSchemaD");
let d = new Date();
let currentOffset = d.getTimezoneOffset();
let offset = 330;
let ISTTime = new Date(d.getTime() + (offset + currentOffset) * 60000);
let day = ISTTime.getDay();
let hours = ISTTime.getHours();
let minutes = ISTTime.getMinutes();
console.log(hours);
console.log(minutes);
console.log(day);
console.log(hours <= 15);
const Process = async (textUser, text, number) => {
  text = text.toLowerCase();
  console.log(text);
  let models = [];
  // let models1 = [];
  if (text.includes("hi")) {
    if (day >= 1 && day <= 5) {
      let model = MessageTemplate(text, number, textUser);

      // let model1 = MessageTemplateDinner(text, number);
      models.push(model);
    } else {
      let model = MessageTimeOver(text, number, textUser);
      models.push(model);
    }
    // models1.push(model1);
  } else if (text == "lunch-veg") {
    if (hours <= 20) {
      let model = MessageTemplateForFood(
        `Thank you ${textUser} for choosing a vegetarian dish for _*Lunch*_. We will add it to our menu for you! `,
        number
      );
      let wlunch = new whatsapplunch({
        name: textUser,
        foodChoice: text,
      });
      await wlunch.save();
      models.push(model);
    } else {
      let model = MessageTimeOver(text, number, textUser);
      models.push(model);
    }
  } else if (text == "lunch-non-veg") {
    if (hours <= 20) {
      let model = MessageTemplateForFood(
        `Awesome, ${textUser} you have chosen non-vegetarian dish for _*Lunch*_. We will add it to our menu for you!`,
        number
      );
      let wlunch = new whatsapplunch({
        name: textUser,
        foodChoice: text,
      });
      await wlunch.save();
      models.push(model);
    } else {
      let model = MessageTimeOver(text, number, textUser);
      models.push(model);
    }
  } else if (text == "dinner-veg") {
    if (hours <= 15) {
      let model = MessageTemplateForFood(
        `Thank you ${textUser} for choosing a vegetarian dish for _*Dinner*_. We will add it to our menu for you! `,
        number
      );
      let wdinner = new whatsappdinner({
        name: textUser,
        foodChoice: text,
      });
      await wdinner.save();
      models.push(model);
    } else {
      let model = MessageTimeOver(text, number, textUser);
      models.push(model);
    }
  } else if (text == "dinner-non-veg") {
    if (hours <= 15) {
      let model = MessageTemplateForFood(
        `Awesome, ${textUser} you have chosen non-vegetarian dish for _*Dinner*_. We will add it to our menu for you!`,
        number
      );
      let wdinner = new whatsappdinner({
        name: textUser,
        foodChoice: text,
      });
      await wdinner.save();
      models.push(model);
    } else {
      let model = MessageTimeOver(text, number, textUser);
      models.push(model);
    }
  } else if (text == "lunch-very-unsatisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *lunch Very Unsatisfied*`,
      number
    );
    let feedback = new whatsappfeedbacklunch({
      name: textUser,
      rating: 1,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "lunch-unsatisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *lunch Unsatisfied*`,
      number
    );
    let feedback = new whatsappfeedbacklunch({
      name: textUser,
      rating: 2,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "lunch-neutral") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *lunch Neutral*`,
      number
    );
    let feedback = new whatsappfeedbacklunch({
      name: textUser,
      rating: 3,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "lunch-satisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *lunch Satisfied*`,
      number
    );
    let feedback = new whatsappfeedbacklunch({
      name: textUser,
      rating: 4,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "lunch-very-satisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *lunch Very satisfied*`,
      number
    );
    let feedback = new whatsappfeedbacklunch({
      name: textUser,
      rating: 5,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "dinner-very-unsatisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *Dinner Very Unsatisfied*`,
      number
    );
    let feedback = new whatsappfeedbackdinner({
      name: textUser,
      rating: 1,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "dinner-unsatisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *Dinner Unsatisfied*`,
      number
    );
    let feedback = new whatsappfeedbackdinner({
      name: textUser,
      rating: 2,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "dinner-neutral") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *Dinner Neutral*`,
      number
    );
    let feedback = new whatsappfeedbackdinner({
      name: textUser,
      rating: 3,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "dinner-satisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *Dinner Satisfied*`,
      number
    );
    let feedback = new whatsappfeedbackdinner({
      name: textUser,
      rating: 4,
    });
    await feedback.save();
    models.push(model);
  } else if (text == "dinner-very-satisfied") {
    let model = MessageTemplateFeedback(
      `${textUser}, Thanks for giving feedback *Dinner Very satisfied*`,
      number
    );
    let feedback = new whatsappfeedbackdinner({
      name: textUser,
      rating: 5,
    });
    await feedback.save();
    models.push(model);
  } else {
    let model = MessageText(
      `Thank you for your valuable time ${textUser}!\n We look forward to serving you again soon!`,
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
  // models1.forEach((model) => sendMessageWhatsapp1(model));
};

module.exports = { Process };

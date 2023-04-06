const { sendMessageWhatsapp } = require("../services/whatsappService");
const { MessageText, MessageTemplate } = require("./whatsappModels");

const Process = (textUser, text, name, number) => {
  textUser = textUser.toLowerCase();
  let models = [];
  if (textUser.includes("hi")) {
    let model = MessageTemplate(text, name, number);
    models.push(model);
  } else {
    let model = MessageText("Thank You!", number);
    models.push(model);
  }
  models.forEach((model) => sendMessageWhatsapp(model));
};

module.exports = { Process };

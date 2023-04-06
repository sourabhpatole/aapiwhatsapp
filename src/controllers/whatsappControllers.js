const fs = require("fs");
const { sendMessageWhatsapp } = require("../services/whatsappService");
const processMessage = require(".././shared/processMessages");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const VerifyToken = (req, res) => {
  try {
    let accessToken = "Sourabh";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const ReceiveMessages = (req, res) => {
  try {
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let messageObject = value["messages"];
    let nameMessage = value["contacts"];
    // let name = contacts["profile"];
    // myConsole.log(nameMessage);

    if (
      typeof messageObject != "undefined" ||
      typeof nameMessage != "undefined"
    ) {
      let dname = nameMessage[0];
      let name = getName(dname);
      // myConsole.log("my name is", name);
      let messages = messageObject[0];
      let number = messages["from"];

      let text = getMessage(messages);
      // myConsole.log(text);
      // myConsole.log("my name is", name);
      if (text != "") {
        processMessage.Process(text, name, number);
      }
    }
    res.send("EVENT_RECEIVED");
  } catch (error) {
    myConsole.log(error);
    res.send("EVENT_RECEIVED");
  }
};
const getMessage = (messages) => {
  let text = "";

  let typeMessage = messages["type"];
  if (typeMessage == "text") {
    text = messages["text"]["body"];
    // name = messages["id"];
  } else if (typeMessage == "interactive") {
    let interactiveObject = messages["interactive"];
    let typeInteractive = interactiveObject["type"];
    if (typeInteractive == "button_reply") {
      text = interactiveObject["button_reply"]["title"];
    } else if (typeInteractive == "list_reply") {
      text = interactiveObject["list_reply"]["title"];
    } else {
      myConsole.log("NO Message");
    }
  } else {
    myConsole.log("NO Message");
  }
  return text;
};
const getName = (dname) => {
  let display = "";
  display = dname["profile"]["name"];
  // myConsole.log(display);
  return display;
};

module.exports = { VerifyToken, ReceiveMessages };

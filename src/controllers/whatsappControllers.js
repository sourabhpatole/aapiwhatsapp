const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const VerifyToken = (req, res) => {
  try {
    let accessToken = process.env.TOKEN;
    let token = req.query["hub-verify_token"];
    let challenge = req.query["hub.challenge"];
    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    } else {
      res.send(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const ReceiveMessages = (req, res) => {
  try {
    let entry = req.query["entry"][0];
    let changes = req.query["changes"][0];
    let value = changes["value"];
    let messageObject = value["message"];
    let messages = messageObject[0];
    let text = GetTextUser(messages);
    res.send("EVENT_RECEIVED");
  } catch (error) {
    console.log(error);
    res.send("EVENT_RECEIVED");
  }
};
const GetTextUser = (messages) => {
  let text = "";
  let typeMessage = messages["type"];
  if (typeMessage == "text") {
    text = messages["text"]["body"];
  } else if (typeMessage == "interactive") {
    let interactiveObject = messages["interactive"];
    let typeInteractive = interactiveObject["type"];
    myConsole.log(interactiveObject);
    if (typeInteractive == "button_replay") {
      text = interactiveObject["button_replay"]["title"];
    } else if (typeInteractive == "list_replay") {
      text = interactiveObject["list_replay"]["title"];
    } else {
      myConsole.log("seen message");
    }
  } else {
    myConsole.log("seen message");
  }
  return text;
};

module.exports = { VerifyToken, ReceiveMessages };

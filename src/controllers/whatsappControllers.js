const VerifyToken = (req, res) => {
  try {
    let accessToken = "QWERTYASDFGH";
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
  res.send("Hi ReveiveToken!");
};

module.exports = { VerifyToken, ReceiveMessages };
